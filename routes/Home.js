var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
	host:'localhost',  //127.0.0.1
	user:'root',	//用户名
	password:'',	//密码
	database:'wangzhan',	//数据库
	port:3306
})



//req:获得数据
//res:请求
router.post('/Home',function(req,res){
	res.header("Access-Control-Allow-Origin","*");

	var uid=req.body['uid'];
	console.log(uid)
	pool.query(`select * from home`, function(err, rows, fields) {
		  if (err) throw err;
		  res.send(rows);
	});

})

module.exports=router;
