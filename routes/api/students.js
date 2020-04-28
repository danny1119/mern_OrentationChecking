import { Router } from 'express';
// User Model
import Student from '../../models/Student';

const router = Router();

/**
 * @route   POST api/students/import
 * @desc    import all student from csv
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

    // res.send("test");
  });
  
  export default router;