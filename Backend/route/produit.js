const express=require('express');
const { ajoutProduit, getProduits, getProduitId, modifierProduit, deleteProduit } = require('../controller/produit');
const router=express.Router();
router.route("/product").post(ajoutProduit);
router.route("/products").get(getProduits);
router.route("/product/:id").get(getProduitId);
router.route("/product/:id").patch(modifierProduit);
router.route("/product/:id").delete(deleteProduit);
module.exports = router;