const db = require('../db/connection')
const validator = require('validator')

const getValue = (req, res) => {
    db.query("select * from user", function (err, data) {
        if (err) {
            res.send({ msg: err })
        } else {
            res.send({ msg: data })
        }
    })
    // res.send({msg:"GET"})
}
const getValueById = (req, res) => {
    var userid = req.params.id
    db.query(`select * from user where id=${userid} `, function (err, data) {
        if (err) {
            res.send({ msg: err })
        } else {
            res.send({ msg: data })
        }
    })
    // res.send({msg:"GET"})
}
const insertValue = (req, res) => {
    if (validator.isEmpty(req.body.username)) {
        res.send({ msg: "username is require" })
    } else if (!validator.isLength(req.body.username, { min: 2, max: 20 })) {
        res.send({ msg: "username lenghth is invalid" })

    } else if (validator.isEmpty(req.body.userage)) {
        res.send({ msg: "userage is required" })
    } else if (!validator.isNumeric(req.body.userage)) {
        res.send({ msg: "userage is inavlid" })
    } else {
        var query = db.query("insert into user set ? ", req.body, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send({ msg: "record inserted...." })
        })
    }
}
const deleteValue = (req, res) => {
    var userid = req.params.id
    db.query(`delete from user where id=${userid}`, function (err, data) {
        if (err) throw err;
        console.log(data);
        res.send({ msg: "DELETE"})  
    })

}
const updateValue = (req, res) => {
    console.log(req.body);
    var userid = req.params.id
    var username=req.body.username;
    var userage=req.body.userage;
    // var query=db.query(`update user set username='${username}',userage='${userage}' where id=${userid}`,function(err,data){
    //     if(err) throw err;
    //     console.log(data);
    //     res.send({msg:"Updated...."})
    // })

    db.query(`update user Set username=?,userage=? where id=${userid}`,[username,userage],function(err,data){
            if(err) throw err;
            console.log(data);
            res.send({msg:"Updated...."})
    })

}

module.exports = {
    getValue: getValue,
    insertValue: insertValue,
    updateValue: updateValue,
    deleteValue: deleteValue,
    getValueById:getValueById
}

