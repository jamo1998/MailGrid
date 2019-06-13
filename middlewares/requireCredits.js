module.exports = (req, res, next) => {
  if(req.user.credits < 1) {
    //If user doesn't have any credits, send 403 'forbidden' err msg
    return res.status(403).send({ error: 'Not enough credits'});
  }
  //if the user has credits, move on to the next request handler
  next();
};