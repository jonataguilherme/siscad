pool = require('./connection');

module.exports={
    findDisciplina: function (req, res) {
    day0 = req.body.day0;
    hour0= req.body.hour0;
    discipline1 = req.body.discipline1;
    pool.getConnection(function (err, connection) {
    console.log("Conexão realizada com sucesso");
    var sql = "Select * FROM professor where disciplina='"+discipline1+"' and dia='"+day0+"'";
    if(hour0==1){
        sql +=" and hora1=1";
    }
    else if(hour0==2){
        sql +=" and hora2=1";
    }
    else if(hour0==3){
        sql +=" and hora3=1";
    }
    else if (hour0==4){
        sql +=" and hora4=1";
    }    
    connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        console.log(sql);
        console.log(result);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    });
});
}
};  

