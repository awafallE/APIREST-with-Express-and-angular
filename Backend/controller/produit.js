const { Produit } = require("../model/produit");
const { ObjectID } = require("bson");
//stocker dans la base
const client=require("../Bd/connect");
//assigner a notre variable une fonction asynchrone pour renvoyer une promesse
const ajoutProduit=async(req,res)=>{
    try {
        //instance de produit tt ce qui vient dans la partie client c dans req avec sa propritei body
        let produit=new Produit(req.body.name,req.body.price,req.body.quantity,req.body.image);
      let result= await client
      .bd()
      .collection("produits")//nom de la collection
            .insertOne(produit);//va ajouter un document dans la collection
        //envoie la reponse dous forme json
      res.status(200).json(result);
    } catch (error) {
        console.log(error);
        //le 500 signifie c'est un blem serveur
        res.status(500).json(error);
    }
};
const getProduits = async (req, res) => {
    try {
      let cursor = client
        .bd()
        .collection("produits")
        .find()
        ;
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).json({ msg: "Aucun produit trouvé" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const getProduitId= async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let cursor = client.bd().collection("produits").find({ _id: id });
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(204).json({ msg: "Cet produit n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const modifierProduit= async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let nname= req.body.name;
      let nprice= req.body.price;
      let nquantity = req.body.quantity;
      let nimage= req.body.image;


      let result = await client
        .bd()
        .collection("produits")
        .updateOne({ _id: id }, { $set: { nname, nprice, nquantity,nimage} });
  
      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "Modification réussie" });
      } else {
        res.status(404).json({ msg: "Cet produit n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  const deleteProduit = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let result = await client
        .bd()
        .collection("produits")
        .deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.status(200).json({ msg: "Suppression réussie" });
      } else {
        res.status(404).json({ msg: "Cet produit n'existe pas" });
      }
    } catch (error) {
      console.log(error);
  
      res.status(501).json(error);
    }
  };
  
module.exports={
    ajoutProduit,getProduits,getProduitId,modifierProduit,deleteProduit
}
