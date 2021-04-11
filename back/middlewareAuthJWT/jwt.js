const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("usuario inexistente");
  }
  const token = req.headers.authorization.split(" ")[1];

  const data = jwt.verify(token, "ebook", function (err, decoded) {
    if (err) {
      res.status(401).send("no podes entrar");
    }
    return decoded
  });

  if (data) {
    req.user = data;
    return next();
  }

};

module.exports = checkJWT;
