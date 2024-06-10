const express = require("express");
const tileExists = require("../../../services/tileExists")

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");
const { edit } = require("../../../controllers/boatActions");

router.get("/", browse);


router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
