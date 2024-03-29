const path = require("path")
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null , 'uploads/')
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null , Date.now() + ext)
    }
})

const uploads = multer({
    storage: storage,
    fileFilter : function(req,file,callback){
        if(file.mimetype == "image/png"){
            callback(null, true)
        }
        else if(file.mimetype == "image/jpeg"){
            callback(null, true)
        }
        else{
            console.log("Only png and jpg files are supported.")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


module.exports = {uploads}