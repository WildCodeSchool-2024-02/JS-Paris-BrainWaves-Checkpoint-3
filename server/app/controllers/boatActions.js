const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
      const boatQuery = await tables.boat.readAll(req.query);
      res.json(boatQuery)
  } catch (err) {
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
