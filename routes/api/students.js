import { Router } from 'express';
// User Model
import Student from '../../models/Student';

const csv = require('csv-parser');
const fs = require('fs');
var async = require('async');
var cmd=require('node-cmd');
const router = Router();



/**
 * @route   POST api/students/
 * @desc    get a student
 * @access  Private
 */
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    if (!students) throw Error('No students exist');
    res.json(students);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/students/import
 * @desc    import a student
 * @access  Private
 */

router.post('/import', async (req, res) => {
    const student = new Student({
        panther_id: req.body.panther_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        department: req.body.department,
        level: req.body.level,
        campus: req.body.campus,
        degree: req.body.degree,
        email: req.body.email,
        college: req.body.college,
        year: req.body.year,
        check_in: req.body.check_in
    });

    try {
      const savedStudent = await student.save();
      res.send(savedStudent);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }

    // res.send(req.body.panther_id);
  });
  

/**
 * @route   POST api/students/csvimport
 * @desc    import all student from csv
 * @access  Private
 */
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'fileupload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})


var multerupload = multer({ storage: storage });
router.post('/csvimport',multerupload.any(), function (req, res){

  var filesArray = req.files;
    // processing each uploaded file
    async.each(filesArray,function(file,eachcallback){
      // processing each function in a file
      async.waterfall([
        function (callback) {
          fs.readFile(file.path, (err, data) => {
            console.log('here', file.path, "+ " , file);
            fs.createReadStream(file.path)
              .pipe(csv())
              .on('data',async (row) => {
                // console.log(row);
                const student = new Student({
                  panther_id: row['panther_id'],
                  first_name: row['first_name'],
                  last_name: row['last_name'],
                  department: row['department'],
                  level: row['level'],
                  campus: row['campus'],
                  degree: row['degree'],
                  email: row['email'],
                  college: row['college'],
                  year: row['year'],
                  check_in: row['check_in']
              });
                console.log(student);
                const savedStudent = await student.save();
                
              })
              .on('end', () => {
                console.log('CSV file successfully processed');
              });
            if (err) {
              console.log("err ocurred", err);
              }
            else {
              callback(null, 'done');
            }
            });
        }
        ], function (err, result) {
          // result now equals 'done'
          //pass final callback to async each to move on to next file
          eachcallback();
        });
    },function(err){
     if(err){
         console.log("error ocurred in each",err);
     }
     else{
       console.log("finished prcessing");
       res.send({
                 "code":"200",
                 "success":"files printed successfully"
                 })
       // cmd.run('rm -rf ./fileupload/*');
     }
     });
});
  export default router;