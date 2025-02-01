import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { config } from "dotenv";
config();

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const client = jwksClient({
  jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json` // Replace with your Auth0 domain
});

// Middleware to verify the token
async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Bearer <token>
    if (!token) {
      return res.status(403).json({ error: 'Authorization token is missing' });
    }
  
    const decodedHeader = jwt.decode(token, { complete: true });
    if (!decodedHeader || !decodedHeader.header || !decodedHeader.header.kid) {
      return res.status(401).send('Token is missing key ID (kid)');
    }

    const { header } = decodedHeader;
    const { publicKey, rsaPublicKey } = await client.getSigningKey(header.kid);
    if (!publicKey && !rsaPublicKey) {
      return res.status(401).send('Invalid key ID (kid) provided.');
    }
    
    const decoded = jwt.verify(token, (publicKey || rsaPublicKey), {
      issuer: `https://${AUTH0_DOMAIN}/`,
    });

    req.user = decoded;  // Store the decoded token in the request object (user info, etc.)
    next();  // Proceed to the next middleware or route handler 
  } catch (error) {
    console.log('Error authenticating user', error);
    return res.status(401).json({ error: 'Token verification failed' });
  }
}

export default verifyToken;