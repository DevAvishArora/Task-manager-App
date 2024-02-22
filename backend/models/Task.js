const connection = require('../config/dbConfig');

class Task {

    static getAll(callback) {
        const query = 'SELECT * FROM tasks';
        connection.query(query, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results);
            }
        });
    }

    static add(title, description, completed, callback) {
        const query = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
        connection.query(query, [title, description, completed], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.insertId);
            }
        });
    }

    static updateStatus(id, completed, callback) {
        const query = 'UPDATE tasks SET completed = ? WHERE id = ?';
        connection.query(query, [completed, id], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.affectedRows > 0);
            }
        });
    }

    static delete(id, callback) {
        const query = 'DELETE FROM tasks WHERE id = ?';
        connection.query(query, [id], (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.affectedRows > 0);
            }
        });
    }
}

module.exports = Task;
