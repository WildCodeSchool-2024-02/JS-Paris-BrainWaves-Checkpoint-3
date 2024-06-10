const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async(req, res, next) => {
  try {
    const boat = await tables.boat.update(req.body);
    res.status(204).json(boat)
  } catch(err) {
    next(err)
  }
}

module.exports = {
  browse,
  edit,
};
