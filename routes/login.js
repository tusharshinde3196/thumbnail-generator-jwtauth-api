var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');

/* GET home page. */

router.post('/', function(req, res, next) {
  const user={
    id:1,
    username:'user',
    password:'password'
}
jwt.sign({user:user},'secretkey',{expiresIn:'2 days'},(err,token)=>{
   if(err){
     res.status(404);
   }else{
    res.json({token});
   }
})

});

module.exports = router;
