var path = require('path');

module.exports = function(app){

	// libraries

	app.get('/angular', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular/angular.js');
		console.log('--'+file);
		res.sendFile(file);
	});

	app.get('/angular-ui-router', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular-ui-router/release/angular-ui-router.js');
		console.log('--'+file);
		res.sendFile(file);
	});

	app.get('/angular-ui-router.js.map', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular-ui-router/release/angular-ui-router.js.map');
		console.log('--'+file);
		res.sendFile(file);
	});

	
//                /js
	app.get('/js/:file', function(req,res){
		res.sendFile(path.join(__dirname,'../views/js',req.params.file));
	})

// ajax routes

	app.get('/getAllPeople', function(req, res){
		res.json({people: [
			{name: 'Anna', id: '1_', children:['Marco', 'Luca']}, 
			{name: 'Luca', id: '2_', children:['Marcos', 'Lucas']}, 
			{name: 'Giorgio', id: '3_', children:['Marcoss', 'Lucass']}
			]}
		);
	});
	

	// normal routes

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname,'../views/index.html'));
	});

	

	app.get('/template/:file', function(req, res){
		res.sendFile(path.join(__dirname,'../views/templates',req.params.file));
	});
}