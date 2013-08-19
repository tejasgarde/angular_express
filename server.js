var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/',function (req,res) {
	  console.log("Hello Server request at Root");
	res.sendfile('./public/index.html')
});

app.get('contact/:id?',function (req,res) {
	res.sendfile('./public/edit.html')
});

app.listen(3000);