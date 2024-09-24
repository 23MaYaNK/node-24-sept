const Student=require('../models/Student');
const { param } = require('../routes/student');


async function addStudent(req,res){
    try{
        console.log(req.body);
        let student=new Student(req.body);
        await student.save();
        res.render('studentadd');
        
}catch(err){
    console.log(err);
}

}
async function getStudents(req,res) {
    try{
        let student =await Student.find({});
        // console.log(student);
        res.render('studentDetails',{
            student:student
        })

    }catch(err){
        console.log(err);

    }
    
}
async function getStudentForEdit(req,res) {
    try{ 
        
        let id=req.params.id;
        let student=await Student.findOne({ _id: id});
        console.log(student);
        res.render('studentforedit',{
            student:student

        });

    }catch(err){
        console.log(err, 'err');
    }
}
async function updateStudent(req,res) {
    try{ let id=req.params.id;
        console.log(req.body ,"request body")
        let student =await Student.findOne({ _id: id});
        console.log(student);
        student.rollNo=req.body.rollNo;
        student.firstName=req.body.firstName;
        student.lastName=req.body.lastName;
        student.fatherName=req.body.fatherName;
        student.addharCardNo=req.body.addharCardNo;
        student.mobileNo=req.body.mobileNo;
        await student.save();
        let students=await Student.find({});
        res.render('studentDetails',{
            student:students   // fileReference : yourvarilable Reference
        }) 
    }catch(err){
        console.log(err);
    }    
}
async function deleteStudent(req,res) {
    try{
        let id =req.params.id;
        await Student.deleteOne({_id:id});
        let student= await Student.find({});
        res.render('studentdetails',{
            student:student
        })


    }catch(err){
        console.log(err);
    }
    
}

module.exports={
    addStudent,
    getStudents,
    getStudentForEdit,
    updateStudent,
    deleteStudent
}