const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secreto_super_seguro';

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Formato de token inválido' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token inválido o expirado' });
        }
        req.user = user;
        next();
    });
};
