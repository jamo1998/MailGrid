//Since we have multiple middlewares, calling the 'next' argument
//passes the request on to the next middleware in the chain
module.exports = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({ error: 'You must log in first!'});
  }
  //if there is a user, move on to the next request handler
  next();
};