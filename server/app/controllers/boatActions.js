const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll(req.query);
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const editedboat = await tables.boat.update(req.body);
      res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  browse,
  edit,
};
