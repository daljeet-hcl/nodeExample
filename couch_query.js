
var cradle = require('cradle');
var db = new(cradle.Connection)().database('my_database');

//querrying by key or _id

//db.get('001',function(err,doc){console.log(doc); });

db.view('employeeViews/age', function (err, res) {
	console.log("printing all rows in the view : ");
	console.log(res); 
	res.forEach(function(key, row, id) {
		console.log('%s: %s', key, row);
	});
});

db.view('employeeViews/age',{key:24}, function (err, res) {
	console.log("printing after filtering for age :24 "); 
	res.forEach(function(key, row, id) {
		console.log('%s: %s', key, row);
	});
});

db.view('employeeViews/age',{descending:true}, function (err, res) {
	console.log("printing in descending order "); 
	res.forEach(function(key, row, id) {
		console.log('%s: %s', key, row);
	});
});

db.view('employeeViews/age',{startkey:25}, function (err, res) {
	console.log("printing all employees with age greater than equal to 25 "); 
	res.forEach(function(key, row, id) {
		console.log('%s: %s', key, row);
	});
});
