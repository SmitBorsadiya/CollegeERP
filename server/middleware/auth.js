import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, resp, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, "sEcReT");
      req.userId = decodedData.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;