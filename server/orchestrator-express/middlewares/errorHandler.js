function errorHandler(err, req, res, next){
  if ( err.code === 400){
      res.status(400).json({message : err.message})
  } else if (err.code === 401){
      res.status(401).json({message : err.message})
  } else if (err.code === 404){
      res.status(404).json({message : err.message})
  } else {
      res.status(500).json({message : err.message})
  }
}


module.exports = errorHandler