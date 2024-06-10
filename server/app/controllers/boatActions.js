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

const edit = async (req, res, next) => {
  try {
  const boats = req.body
  const insertID = await tables.boat.update(boats);
      res.status(204).json({insertID})
  } catch (error) {
      next(error)
  }
}

module.exports = {
  browse,
  edit,
};
