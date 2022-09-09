const express= require('express');
const multer = require('multer');
const { showStudentdata,Storagedata } = require('../controllers/userController');
const path= require('path');
const e = require('express');

const router= express.Router();

//multer setup
const userstrorage= multer.diskStorage({
    destination:(req, file, cb)=>{

       if(req.files.photo){

        if( file.mimetype== 'image/jpeg' || file.mimetype== 'image/jpg' || file.mimetype== 'image/png' || file.mimetype== 'image/gif' || file.mimetype== 'image/webp'){
            cb(null, path.join(__dirname, '../public/images/'))
        }else{
            console.log('invelid images');
        }
       }
       
       if(req.files.cv){

            if(file.mimetype=='application/pdf'){
                cb(null, path.join(__dirname, '../public/cv/'))
            }else{
                console.log('Invalid cv formate');
            }
        

       }
       

    },
    filename:(req, file, cb)=>{
        cb(null,Date.now()+'-'+ Math.floor(Math.random() * 1000000)+'-'+file.originalname )
    }
});

const suermulter= multer({
    storage:userstrorage
}).fields([
    {
        name:"photo",
        maxCount:4
    },
    {
        name:"cv",
        maxCount:1
    }
]);

router.get('/',showStudentdata)
router.post('/',suermulter,Storagedata)


module.exports=router;