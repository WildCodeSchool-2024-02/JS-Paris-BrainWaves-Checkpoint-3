const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select * from ${this.table} JOIN tile ON ${this.table}.id=tile.id`);

    // Return the array of boats
    return rows;
  }
  
  async update(boat) {
    const {coordX, coordY, id} = boat;
    const [result] =await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? WHERE id = ?`,
      [coordX, coordY, id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
