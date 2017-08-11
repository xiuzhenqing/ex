var express=require('express');
var mysql=require('mysql');
var router=express.Router();
var pool=mysql.createPool({
	host:'localhost',  //127.0.0.1
	user:'root',	//用户名
	password:'',	//密码
	database:'exam',	//数据库
	port:3306
})
//req:获得数据
//res:请求
router.get('/News',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select * from News',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
})
router.post('/Xq',function(req,res){
	var id=req.body['id']
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select * from News where id='+id,function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
})
router.post('/upscases',function(req,res){
	var id=req.body["id"]
	var title=req.body["title"]
	var content=req.body["content"]
	res.header("Access-Control-Allow-Origin", "*");
pool.query(`update News set  title="${title}",content="${content}" where id=${id}`, function(err, rows, fields) {
		pool.query('select * from News',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
	});
})
router.post('/dele',function(req,res){
	var id=req.body["id"]
	res.header("Access-Control-Allow-Origin", "*");
	pool.query(`delete from News where id=${id}`, function(err, rows, fields) {
		pool.query('select * from News',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
	});
})





module.exports=router;
