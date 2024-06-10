const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

const tileExists = require("../../../services/tileExists");
// c'est pas un objet pourquoi il considere objet ?
router.get("/", browse);
router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
