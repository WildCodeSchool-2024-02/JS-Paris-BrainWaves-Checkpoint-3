const tables = require('../../database/tables')

const tileExists = async (req, res, next) => {
    try {
        const [tile] = await tables.tile.readByCoordinates(req.body.coord_x, req.body.coord_y)
        if (tile) 
            next()
        else res.sendStatus(422)
    } catch(err) {
        next(err)
    }
};

module.exports = tileExists;
