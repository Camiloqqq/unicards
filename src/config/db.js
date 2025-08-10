const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root@localhost',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'unicards_db'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        process.exit(1);
    }
    console.log(' Conectado a MySQL');
});

module.exports = db;
