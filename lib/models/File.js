const pool = require('../utils/pool');

module.exports = class File {
    id;
    link;

    constructor(row) {
        this.id = row.id;
        this.link = row.link;
    }

    static async insert(file) {
        const { rows } = await pool.query(
            `INSERT INTO files (link) VALUES ($1) RETURNING *`,
            [files.link]
        );
        return new File(rows[0]);
    }

    static async select() {
        const { rows } = await pool.query(
            `SELECT * FROM files`);
        return rows.map(row => new File(row));
    }
}