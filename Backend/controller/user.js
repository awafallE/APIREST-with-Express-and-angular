const { User } = require("../model/user");
const { ObjectID } = require("bson");
//stocker dans la base
const client=require("../Bd/connect");

const ajoutUser=async(req,res)=>{
    try {
        let user=new User(req.body.firstname,req.body.lastname,req.body.address);
      let result= await client
      .bd()
      .collection("users")
      .insertOne(user);
      res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const getUsers = async (req, res) => {
    try {
      let cursor = client
        .bd()
        .collection("users")
        .find()
        ;
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).json({ msg: "Aucun utilisateur trouvé" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const getUserId= async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let cursor = client.bd().collection("users").find({ _id: id });
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const modifierUser= async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let nfirstname= req.body.firstname;
      let nlastname= req.body.lastname;
      let naddress = req.body.address;
      let result = await client
        .bd()
        .collection("users")
        .updateOne({ _id: id }, { $set: { nfirstname, nlastname, naddress} });
  
      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "Modification réussie" });
      } else {
        res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const deleteUser = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let result = await client
        .bd()
        .collection("users")
        .deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.status(200).json({ msg: "Suppression réussie" });
      } else {
        res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
  
      res.status(501).json(error);
    }
  };
  
module.exports={
    ajoutUser,getUsers,getUserId,modifierUser,deleteUser
}
