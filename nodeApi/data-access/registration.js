const {poolPromise} = require('../../dbUtil');
exports.addParent = async parentInfo =>{

    console.log('the info in the data layer is ',parentInfo);

   /* try {
        const pool = await poolPromise
        const result = await pool.request()
            .query('select * from students')
        console.log('the database results are ',result.recordset);
        res.json(result.recordset)
    } catch (err) {
        console.log('there was an error');
        res.status(500)
        res.send(err.message)
    } */

}
