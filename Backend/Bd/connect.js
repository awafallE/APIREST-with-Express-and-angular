const { MongoClient ,Db} = require("mongodb");

var client=null;
//le calback definit si la connexion passe
function connecter(url, callback) {
    //Si la connection n'est etablie
    if(client=== null){
        client = new MongoClient(url)
        //on fait apppel a la fonction callback qui as on retour a com para erreur
        client.connect((err)=>{
            if(err){
                client=null;
                callback(err);
            } else {
                //signifie pas d'erreur
                callback();
            }
        });
    }else{
        callback();
    }

}
//fonctio qui retourne uns instance de la class DB qui permet de donner un nom a la base
function bd(){
   var db= new Db(client,'OK');
return db;
}
function fermerConnexiion(){
    if(client){
        client.close();
        client=null;
    }
}
module.exports={connecter,client,bd,fermerConnexiion};