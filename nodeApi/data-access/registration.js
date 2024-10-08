const {sql,poolPromise} = require('../../dbUtil');
var bcrypt = require('bcryptjs');
var saltRounds=10;
exports.submitRegistrationForm = async data =>{

    console.log('the data coming in is ',data);

    //insert parent data into parent table
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);

    ps.input('firstName', sql.VarChar);
    ps.input('lastName', sql.VarChar);
    ps.input('city', sql.VarChar);
    ps.input('state', sql.VarChar);
    ps.input('billingAddress1', sql.VarChar);
    ps.input('billingAddress2', sql.VarChar);
    ps.input('stripe_number', sql.VarChar);
    ps.input('emailAddress', sql.VarChar);
    ps.input('password', sql.VarChar);

    var parentInsertStmt = 'INSERT INTO Parents (FirstName,LastName, city,state,billingAddress1, billingAddress2, stripe_number, emailAddress, password)';
    parentInsertStmt+= 'Values(@firstName, @lastName, @city, @state, @billingAddress1, @billingAddress2, @stripe_number, @emailAddress, @password) SELECT SCOPE_IDENTITY() as id';
    await ps.prepare(parentInsertStmt);




    var hashedPassword = await bcrypt.hash(data.password1,10);



    var parentObj = {
        firstName:data.firstName,
        lastName: data.lastName,
        city: data.city,
        state: data.state,
        billingAddress1: data.billingAddress1,
        billingAddress2: data.billingAddress2,
        stripe_number: data.stripe_number,
        emailAddress: data.emailAddress,
        password: hashedPassword
    }


    const res = await ps.execute(parentObj);

    var insertedParentID = res.recordset[0].id;
    console.log('the result of the insert parent object is ',res);
    console.log('the inserted id of the parent object is ',insertedParentID);
    await ps.unprepare();

    console.log('the student data is ',data.students);
    for(var i=0; i<data.students.length; i++){



        console.log('the student loop is running');
        var student = data.students[i];
        var ps2 = new sql.PreparedStatement(pool);
        ps2.input('parentID',sql.Int);
        ps2.input('firstName',sql.VarChar);
        ps2.input('lastName',sql.VarChar);
        ps2.input('city',sql.VarChar);
        ps2.input('state',sql.VarChar);
        ps2.input('username',sql.VarChar);
        ps2.input('password',sql.VarChar);
        ps2.input('dateOfBirth',sql.VarChar);
        ps2.input('grade',sql.VarChar);

        var hash = await bcrypt.hash(student.studentPassword,10);

        var studentInsertStmt = 'INSERT INTO Students (parentID,firstName,lastName,city,state,username,password,dateOfBirth,grade)';
        studentInsertStmt+= 'Values(@parentID, @firstName, @lastName, @city,@state,@username, @password, @dateOfBirth, @grade) SELECT SCOPE_IDENTITY() as id ';
        await ps2.prepare(studentInsertStmt);

        var studentObj = {
            parentID:insertedParentID,
            firstName:student.studentFirstName,
            lastName: student.studentLastName,
            city: data.city,
            state: data.state,
            username:student.studentUserName,
            password: hash,
            dateOfBirth: student.studentDateOfBirth,
            grade: student.studentGrade
        }

        var result = await ps2.execute(studentObj);
        console.log('the result of the insert student statement was ',result);
        var insertedStudentID = result.recordset[0].id;

        await ps2.unprepare();

        var studentCourses = data.studentCourses[i];
        var math = studentCourses.math;
        var science = studentCourses.science;
        var english = studentCourses.english;
        var socialStudies = studentCourses.socialStudies;
        var elective = studentCourses.elective;



        Object.keys(studentCourses).forEach( async function(key,index) {

            var course = studentCourses[key];
            console.log(course);

            console.log('key is',key);
            var ps3 = new sql.PreparedStatement(pool);
            ps3.input('parentID',sql.Int);
            ps3.input('studentID',sql.Int);
            ps3.input('courseCategory',sql.VarChar);
            ps3.input('courseName',sql.VarChar);

            var studentCoursesInsertStmt = 'INSERT INTO StudentCourses (parentID,studentID,courseCategory,courseName)';
            studentCoursesInsertStmt+= 'Values(@parentID,@studentID, @courseCategory,@courseName)';

            await ps3.prepare(studentCoursesInsertStmt);
            var insertObj;

               insertObj ={
                   parentID:insertedParentID,
                   studentID:insertedStudentID,
                   courseCategory:key,
                   courseName:course
               }

             var response =  await ps3.execute(insertObj);

               console.log('the result of the courses insert is ',response);
               await ps3.unprepare();

        });



    }
    //insert student(s) data into student table




}

exports.addParent = async parentInfo =>{



}
