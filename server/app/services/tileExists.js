const tables = require("../../database/tables");

module.exports = async (req, res, next) => {
  try {
    const rows = await tables.tile.readByCoordinates(req.body.coord_x, req.body.coord_y);
    if (rows.length > 0) next()
    else res.sendStatus(422);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
};
