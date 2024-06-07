import jwt from "jsonwebtoken";

 const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
 
  if (!token) return res.status(401).json({ message: "Not Authenticated!" });
// Verification fo jwt key 
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;
    next();
  });
};

export default verifyToken; 