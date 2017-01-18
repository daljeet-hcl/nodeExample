
var cradle = require('cradle');
var db = new(cradle.Connection)().database('my_database');

//querrying by key or _id
//
//db.get('001',function(err,doc){console.log(doc); });

db.save('_design/employeeViews', {
      salary: {
        map: function (doc) {
            emit(doc.Name, doc.Salary);
        }
      },
      address: {
        map: function (doc) {
            emit(doc.Name, doc.Address);
        }
      },
      age:{
	      map: function(doc){
		      emit(doc.name,doc.age);
	      }
      }
});
