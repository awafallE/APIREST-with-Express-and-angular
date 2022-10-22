const { MongoClient ,Db} = require("mongodb");

var client=null;
//le calback definit si la connexion passe
function connecter(url,callback){
    if(client=== null){
        client=new MongoClient(url)
        client.connect((err)=>{
            if(err){
                client=null;
                callback(err);
            }else{
                callback();
            }
        });
    }else{
        callback();
    }

}
//fonctio qui retourne uns instance de la class bd
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