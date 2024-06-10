const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    if (where == null){
      const [rowsQuery ] = await this.database.query(`select boat.*, tile.type, tile.has_treasure from ${this.table} as boat join tile on boat.coord_x = tile.coord_x and boat.coord_y = tile.coord_y`)
      return rowsQuery
    }
    const [rows] = await this.database.query(`select boat.*, tile.type, tile.has_treasure from ${this.table} as boat join tile on boat.coord_x = tile.coord_x and boat.coord_y = tile.coord_y where boat.name = ?`,
    [where.name]);
    return rows
  }

  async update(boat){
    const [rows] = await this.database.query(`update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
    [boat.coord_x, boat.coord_y, boat.id]);
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
