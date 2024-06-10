const AbstractRepository = require("./AbstractRepository");


class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat", table2: "tile" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const b = this.table
    const t = this.table2
    const [rows] = await this.database.query(
      `select ${b}.*, ${t}.type, ${t}.has_treasure 
      from ${b} 
      join ${t} 
      on ${t}.coord_x = ${b}.coord_x 
      and ${t}.coord_y = ${b}.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [move] = await this.database.query(
      `UPDATE ${this.table} SET ? WHERE id = ?`,
      [boat, boat.id]
    );
    return move.affectedRows;
  }
}

module.exports = BoatRepository;
