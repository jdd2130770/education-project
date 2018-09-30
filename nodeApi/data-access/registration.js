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
    parentInsertStmt+= 'Values(@firstName, @lastName, @city, @state, @billingAddress1, @billingAddress2, @stripe_number, @emailAddress, @password)';
    await ps.prepare(parentInsertStmt);




    var hashedPassword = await bcrypt.hash(data.password1,10);

    console.log('the hashed password is ',hashedPassword);

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

    console.log('the result of the insert parent object is ',res);
    await ps.unprepare();

    console.log('the student data is ',data.students);
    for(var i=0; i<data.students.length; i++){

        console.log('the student loop is running');
        var student = data.students[i];
        var ps2 = new sql.PreparedStatement(pool);
        ps2.input('ParentID',sql.Int);
        ps2.input('firstName',sql.VarChar);
        ps2.input('lastName',sql.VarChar);
        ps2.input('city',sql.VarChar);
        ps2.input('state',sql.VarChar);
        ps2.input('username',sql.VarChar);
        ps2.input('password',sql.VarChar);
        ps2.input('dateOfBirth',sql.VarChar);
        ps2.input('grade',sql.VarChar);

        var hash = await bcrypt.hash(student.studentPassword,10);

        var studentInsertStmt = 'INSERT INTO Students (ParentID,firstName,lastName,city,state,username,password,dateOfBirth,grade)';
        studentInsertStmt+= 'Values(@parentID, @firstName, @lastName, @city,@state,@username, @password, @dateOfBirth, @grade)';
        await ps2.prepare(studentInsertStmt);

        var studentObj = {
            parentID:'abc',
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

        await ps2.unprepare();
    }
    //insert student(s) data into student table




}

exports.addParent = async parentInfo =>{

    console.log('the info in the data layer is ',parentInfo);

      var firstName = ''+parentInfo.firstName;
      var lastName  =  ''+parentInfo.lastName;
      var emailAddress = ''+parentInfo.emailAddress;
      var city = ''+parentInfo.city;
      var state = ''+parentInfo.state;
      var address1 = ''+parentInfo.address1;
      var address2 = ''+parentInfo.address2;
      var creditCardNumber = ''+parentInfo.creditCardNumber;
      var expirationDate = ''+parentInfo.expirationDate;
      var securityCode = ''+parentInfo.securityCode;
      var password = ''+parentInfo.password;



    var insertQuery = "INSERT INTO Parents (firstName, lastName, emailAddress,city,state,address1,address2,creditCardNumber,expirationDate,securityCode, password)";
    insertQuery += "VALUES('"+ firstName+"','"+ lastName+"','" +emailAddress+"','" +city+"','" +state+"','"+ address1+"','"
        +address2+"','" +creditCardNumber+"','"+expirationDate+"','"+ securityCode+"','"+password+"')";

    console.log("The insert query is ",insertQuery);
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query(insertQuery);
        console.log(result);
        return result;
    } catch (err) {
        console.log('there was an error');
        console.log(err);
        return(err);
    }

}
