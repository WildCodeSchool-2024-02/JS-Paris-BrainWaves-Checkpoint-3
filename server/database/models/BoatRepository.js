const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }
  
  async update(boat) {
    const {coord_x, coord_y, id} = boat;
    const [result] =await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? WHERE id = ?`,
      [coord_x, coord_y, id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
