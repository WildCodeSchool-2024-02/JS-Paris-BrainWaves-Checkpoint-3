const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(query) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    if (query.name) {
      const [rows] = await this.database.query(`select boat.*, tile.type, tile.has_treasure from ${this.table} as boat join tile on boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y where boat.name = ?`, [query.name]);
      // Return the array of boats
      return rows;
    }
      const [boats] = await this.database.query(`select * from ${this.table}`);
      return boats;
  }

  async update(boat) {
    const {id, coord_x, coord_y} = boat;
    const [updatedBoat] = await this.database.query(`update ${this.table} set coord_x = ?, coord_y = ? where id = ?`, [coord_x, coord_y, id]);
    return updatedBoat.affectedRows;
  }
}

module.exports = BoatRepository;
