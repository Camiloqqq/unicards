const db = require('../config/db');

// Obtener cartas de un usuario
exports.getUserCards = (req, res) => {
    const userId = req.params.userId;
    db.query(
        'SELECT * FROM cards WHERE user_id = ?',
        [userId],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al obtener cartas' });
            }
            res.json(results);
        }
    );
};

// Agregar carta a un usuario
exports.addCard = (req, res) => {
    const { user_id, card_name, image_url } = req.body;
    db.query(
        'INSERT INTO cards (user_id, card_name, image_url) VALUES (?, ?, ?)',
        [user_id, card_name, image_url],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al agregar carta' });
            }
            res.json({ message: 'Carta agregada correctamente', id: result.insertId });
        }
    );
};
