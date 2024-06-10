const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const validateTile = require("../../../services/tileExists")

router.get("/", browse);
router.put("/:id", validateTile, edit);

/* ************************************************************************* */

module.exports = router;
