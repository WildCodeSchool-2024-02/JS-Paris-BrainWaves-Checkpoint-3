const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const tile = await tables.tile.readAll();
    // Respond with the boats in JSON format
    res.status(200).json(tile);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByCoordinates = async (req, res, next) => {
  const { coordx, coordy } = req.body; // Ou req.params selon votre configuration de route
  try {
    const [tile] = await tables.tile.readByCoordinates(coordx, coordy);
    if (tile) {
      res.status(200).json(tile); // Si la tuile est trouvée, renvoyer la tuile en JSON avec un statut 200
    } else {
      res.status(404).json({ message: "Tuile non trouvée" }); // Si la tuile n'est pas trouvée, renvoyer une réponse avec un statut 404
    }
  } catch (err) {
    next(err); // Si une erreur se produit lors de la recherche de la tuile, la passer au middleware de gestion des erreurs
  }
};

// const tileExists = async (req, res, next) => {
//   const tile = req.body;

//   try {
//     const [result] = await tables.tile.readByCoordinates(
//       tile.coord_x,
//       tile.coordy
//     );
//     if (result) {
//       next();
//     } else {
//       res.sendStatus(422);
//     }
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  browse,
  readByCoordinates,
  //   tileExists,
};
