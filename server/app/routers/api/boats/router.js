const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const testCoord = require("../../../services/tileExists");
const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:id", testCoord, edit);

/* ************************************************************************* */

module.exports = router;
