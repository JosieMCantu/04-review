const pool = require('../utils/pool');

module.exports = class File {
    id;
    fileName;

    constructor(row) {
        this.id = row.id;
        this.fileName = row.name;
    }

    static async insert(fileName) {
        const { rows } = await pool.query(
            `INSERT INTO files (name) VALUES ($1) RETURNING *`,
            [fileName]
        );
        return new File(rows[0]);
    }

    static async select() {
        const { rows } = await pool.query(
            `SELECT * FROM files`);
        return rows.map(row => new File(row));
    }

    static async selectId(id) {
        const { rows } = await pool.query(
            `SELECT * FROM files WHERE id=$1`, [id]);
        return new File(rows[0]);
    }

    static async updateFileById(id, fileName) {
        const { rows } = await pool.query(
            `UPDATE files SET name = $1 WHERE id = $2 RETURNING *`, [fileName, id]);
        return new File(rows[0]);
    }

    static async deleteFile(id) {
        const { rows } = await pool.query(
            `DELETE from files WHERE id = $1 RETURNING *`, [id]);
        return new File(rows[0]);
    }
}