
const validateTiles = (req,res,next) => {
    const {coord_x, coord_y} = req.body;
    if(coord_x === 0 && coord_x <= 11 && coord_y === 0 && coord_y <= 5) {
      return next()
    } else {
    return res.sendStatus(422)
    }
}


module.exports = validateTiles
