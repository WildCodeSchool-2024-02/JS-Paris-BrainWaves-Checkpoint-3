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
    const { coord_x, coord_y, id } = boat;
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `update boat set coord_x = ?, coord_y = ? where id = ?`,
      [coord_x, coord_y, id]
    );

    // Return the array of boats
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
