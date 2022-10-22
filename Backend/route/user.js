const express=require('express');
const { ajoutUser, getUsers, getUserId, modifierUser, deleteUser } = require('../controller/user');
const router=express.Router();

router.route("/user").post(ajoutUser);
router.route("/users").get(getUsers);
router.route("/user/:id").get(getUserId);
router.route("/user/:id").patch(modifierUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;