//crer notre app
const express = require('express')
const { connecter } = require('./Bd/connect')
//une instance de express
const app=express()
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const routeUser=require('./route/user')
const routeProduit=require('./route/produit')
//permet de solliciter ke serveur local avec la route
//racine  c''est un middleware qui convertit les input en URL
app.use(express.urlencoded({ extended: true }));
//convertit les input de la requete en json
app.use(express.json());
//pour atteindre  la ressource
app.use('/api',routeUser);
app.use('/api/v1', routeProduit);
//On fait appelle a notre donction connecter
connecter("mongodb://127.0.0.1:27017/",(erreur)=>{
    if(erreur){
        console.log("problemee")
        process.exit(-1)
    }else{
        console.log("connexion reussie")
        //cree le serveur
        app.listen(3100)
       console.log('serveur')
    }
})
