const router = require("express").Router();

const {browse} = require("../../../controllers/tileActions");

router.get("/", browse);

module.exports = router;