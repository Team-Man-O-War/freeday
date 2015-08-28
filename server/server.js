var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost/freedaydb');



var User = sequelize.define('user',{

	username:{
		type: sequelize.STRING,
		field:'username'
	},
	password:{
		type: sequelize.STRING,
		field:'password'
	},
	address:{
		type:sequelize.STRING,
		field:'address'
	}
})

var Event = sequelize.define('event',{

  title:{
    type:sequelize.STRING,
    field:'title'
  },
  category:{
    type:sequelize.STRING,
    field:'category'
  },
  time:{
    type:sequelize.STRING,
    field:'time'
  },
  description:{
    type:sequelize.STRING,
    field:'description'
  },
  location:{
    type:sequelize.STRING,
    field:'location'
  },
  tags:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    field:'tags'
  }


});

var Category = sequelize.define('category',{
  name:sequelize.STRING,
  field:'name'
});




if(sequelize.sync()){
  console.log("connected")
}

app.use('/', express.static('client'));//should serve index.html page.

app.listen(3000);