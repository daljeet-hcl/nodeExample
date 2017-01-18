//interactive queries to be run at mongo shell
use my_database;

//to show all collections
show collections;

// to find all document
db.cars.find();
db.employees.find();


// to find all employees with age 24

db.employees.find({"age": 24});

//all employees with age greater than 24
db.employees.find({"age": {$gt: 24} }); //.count(); 

//  for counting them 
//
db.employees.find({"age": {$gt: 24} }).count();



