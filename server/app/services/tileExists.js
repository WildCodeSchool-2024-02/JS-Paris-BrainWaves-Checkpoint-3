const tables = require("../../database/tables");

const valideTitle = async (req, res, next) => {
    try {
        const [result] = await tables.tile.readByCoordinates(req.body.coord_x, req.body.coord_y);
        if (result){
            next()
        }
        else {
            res.sendStatus(422)
        }
    } catch (err){
        next(err)
    }
   
}

module.exports = valideTitle
