var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');
const imageThumbnail = require('image-thumbnail');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  jwt.verify(req.token,'secretkey',(err)=>{
    if(err){
      res.json({
        message:"login fisrt"
      });
    }else{

        //let options = { width: 50, height: 50, responseType: 'base64', jpegOptions: { force:true, quality:90 } }
       generatethumb();
    }
  })
});
async function generatethumb(){
  try {
    const thumbnail = await imageThumbnail('../images/image.jpg');
    console.log(thumbnail);
} catch (err) {
    console.error(err);
}
}

module.exports = router;
