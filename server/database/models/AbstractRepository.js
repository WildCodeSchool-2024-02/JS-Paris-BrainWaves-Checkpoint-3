// Import database client
const database = require("../client");

// Provide database access through AbstractRepository class
class AbstractRepository {
  constructor({ table, table2 }) {
    // thx https://www.codeheroes.fr/2017/11/08/js-classes-abstraites-et-interfaces/
    if (this.constructor === AbstractRepository) {
      throw new TypeError(
        "Abstract class 'AbstractRepository' cannot be instantiated directly"
      );
    }

    // Store the table name
    this.table = table;
    this.table2 = table2;

    // Provide access to the database client
    this.database = database;
  }
}

// Ready to export
module.exports = AbstractRepository;
