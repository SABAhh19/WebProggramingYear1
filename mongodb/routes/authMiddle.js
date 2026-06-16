import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: "You don't have a token",
    });
  }

  try {
    jwt.verify(token, "mysecret");
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
}
