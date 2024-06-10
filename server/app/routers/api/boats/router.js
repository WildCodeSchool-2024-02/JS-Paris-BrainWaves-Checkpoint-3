const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");
const { edit } = require("../../../controllers/boatActions");

router.get("/", browse);


router.put("/:id", edit);

/* ************************************************************************* */

module.exports = router;
