const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const valideTitle = require("../../../services/tileExists");

router.get("/", browse);
router.put("/:id",valideTitle, edit)

/* ************************************************************************* */

module.exports = router;
