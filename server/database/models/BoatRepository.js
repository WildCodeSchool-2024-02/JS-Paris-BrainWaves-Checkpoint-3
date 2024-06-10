const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    let rows
    if (where.name) {
      rows = await this.database.query(
        `select ${this.table}.*, tile.type, tile.has_treasure from ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y WHERE boat.name = ?`, [where.name]
      );
    }
    else {
      rows = await this.database.query(
        `select ${this.table}.*, tile.type, tile.has_treasure from ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y`,
        []
      );
    }

    // Return the array of boats
    return rows[0];
  }

  async update(boat) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
