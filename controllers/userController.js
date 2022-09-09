



const showStudentdata= (req, res)=>{

res.render('user/index');
}
const Storagedata= (req, res)=>{

    res.json(req.body);
    }


module.exports={
    showStudentdata,
    Storagedata
}