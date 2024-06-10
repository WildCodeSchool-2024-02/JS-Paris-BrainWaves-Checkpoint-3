const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();

    // Respond with the boats in JSON format
    res.json(tiles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
