const express =require('express')
const { connecter } = require('./Bd/connect')
const app=express()
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const routeUser=require('./route/user')
const routeProduit=require('./route/produit')
//permet de solliciter ke serveur local avec la route racine
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',routeUser);
app.use('/api/v1',routeProduit);
connecter("mongodb://127.0.0.1:27017/",(erreur)=>{
    if(erreur){
        console.log("problemee")
        process.exit(-1)
    }else{
        console.log("connexion reussie")
        app.listen(3100)
       console.log('serveur')
    }
})
