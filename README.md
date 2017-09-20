# bookstore
A simple bookstore app using node.js and mongoDB

This project runs on localhost:5000

Start the mongoDB server:
Open cmd as administrator
Go to the directory containing mongoDB/bin->
net start MongoDB

To go to the mongoDB console->
mongo

To start the server, first create a MongoDB by creating a db = bookstore->
use bookstore

After creating the db, next create collection = books->
db.createCollection("books")


To start the node.js, open cmd/git bash in the project folder and->
node app


General mongo commands:

to create/use db 
use <dbname>	

to see all databases			
show dbs		

to create collection			
db.createCollection('<collection_name>');	

to insert data into <collection_name>	
db.<collection_name>.insert({
	field1:"val_field1",
	field2:"val_field2",
	field3:{
		field3_1:"val_field3_1",
		field3_2:"val_field3_2"
	},
	field4:["field4_1", "field4_2"],
	field5:[
		{
			field5_1_1:"val_field5_1_1",
			field5_1_2:"val_field5_1_2"
		},
		{
			field5_2_1:"val_field5_2_1",
			field5_2_2:"val_field5_2_2"
		}
	],
	field6:10,
	field7:10.79
});

to update data in <collection_name>
db.<collection_name>.update({<unique_property>},
			{properties_to_be_changed}
);

to update data in <collection_name> with new/any one field
db.<collection_name>.update({<unique_property>},
			{$set:{field_name:"val_field_name"}}
);
