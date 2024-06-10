const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const tile = req.body;

  try {
    const [result] = await tables.tile.readByCoordinates(
      tile.coord_x,
      tile.coord_y
    );
    if (result) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

// je sais pas comment ca a marcher j'ai psser 2h dessus j'ai casi rien changer j'allais abandonner
module.exports = tileExists;
