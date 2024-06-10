const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();
    res.json(tiles);
  } catch (error) {
    next(error);
  }
};

const readByCoordinates = async (req, res, next) => {
    try {
        const {coord_x, coord_y} = req.body;
        const tile = await tables.tile.readByCoordinates(coord_x, coord_y);
        res.json(tile);
    } catch (error) {
       next(error); 
    }
}
module.exports = { browse, readByCoordinates };
