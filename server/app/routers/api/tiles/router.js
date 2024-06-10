const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/tileActions");

router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
