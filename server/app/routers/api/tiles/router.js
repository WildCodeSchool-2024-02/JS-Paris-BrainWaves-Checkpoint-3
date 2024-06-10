const express = require("express");

const router = express.Router();

const { browse, readByCoordinates } = require("../../../controllers/tileActions");

router.get("/", browse);
router.get("/coord", readByCoordinates);

module.exports = router;
