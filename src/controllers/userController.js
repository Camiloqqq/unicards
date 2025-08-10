const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'secreto_super_seguro';

// 📌 Registrar usuario
exports.registerUser = (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Verificar si el correo ya existe
    db.query('SELECT id FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en la base de datos' });
        if (results.length > 0) return res.status(409).json({ error: 'El correo ya está registrado' });

        // Encriptar contraseña
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({ error: 'Error al encriptar contraseña' });

            db.query(
                'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
                [email, username, hash],
                (err, result) => {
                    if (err) return res.status(500).json({ error: 'Error al registrar usuario' });
                    res.json({ message: 'Usuario registrado correctamente', id: result.insertId });
                }
            );
        });
    });
};

// 📌 Login de usuario
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en la base de datos' });
        if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });

        const user = results[0];

        // Comparar contraseñas
        bcrypt.compare(password, user.password, (err, match) => {
            if (err) return res.status(500).json({ error: 'Error al verificar contraseña' });
            if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });

            // Generar token JWT
            const token = jwt.sign(
                { id: user.id, email: user.email, username: user.username },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({
                message: 'Login exitoso',
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            });
        });
    });
};

// 📌 Obtener todos los usuarios (protegido)
exports.getUsers = (req, res) => {
    db.query('SELECT id, email, username FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener usuarios' });
        res.json(results);
    });
};

// 📌 Actualizar usuario
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { email, username, password } = req.body;

    if (!email && !username && !password) {
        return res.status(400).json({ error: 'Debe proporcionar al menos un campo para actualizar' });
    }

    const updates = [];
    const values = [];

    if (email) {
        updates.push('email = ?');
        values.push(email);
    }
    if (username) {
        updates.push('username = ?');
        values.push(username);
    }
    if (password) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({ error: 'Error al encriptar contraseña' });

            updates.push('password = ?');
            values.push(hash);

            values.push(id);
            db.query(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, values, (err, result) => {
                if (err) return res.status(500).json({ error: 'Error al actualizar usuario' });
                res.json({ message: 'Usuario actualizado correctamente' });
            });
        });
        return;
    }

    values.push(id);
    db.query(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, values, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar usuario' });
        res.json({ message: 'Usuario actualizado correctamente' });
    });
};

// 📌 Eliminar usuario
exports.deleteUser = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar usuario' });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.json({ message: 'Usuario eliminado correctamente' });
    });
};
