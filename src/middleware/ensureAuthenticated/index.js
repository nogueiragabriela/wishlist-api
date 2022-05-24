import jwt from 'jsonwebtoken';

function ensureAuthenticatedJwt(req, res, next) {
    const authToken = req.headers.authorization;
    try {
        const [, token] = authToken.split(' ');
        const secret = process.env.JWT_SECRET 
        jwt.verify(token, secret);
        return next();
    } catch (err) {
        return res.status(401).send({ error: 'Unauthorized' });
    }
}

export { ensureAuthenticatedJwt };

