const {sql,poolPromise} = require('../../dbUtil');

exports.submitRegistrationForm = async data =>{

    //insert into parent table
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);

    ps.input('storeHash', sql.VarChar);
    await ps.prepare('SELECT * FROM testimonialApp WHERE storeHash = @storeHash ');



    const res = await ps.execute({storeHash:hash});

    await ps.unprepare();


    return res;
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
