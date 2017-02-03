var path = require('path');

module.exports = function(app){

	// libraries

	app.get('/angular', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular/angular.js');
		console.log('--'+file);
		res.sendFile(file);
	});

/*	app.get('/angular-ui-router', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular-ui-router/release/angular-ui-router.js');
		console.log('--'+file);
		res.sendFile(file);
	});
*/

	app.get('/angular-ui-router.js.map', function(req, res){
		let file = path.join(__dirname,'../node_modules/angular-ui-router/release/angular-ui-router.js.map');
		console.log('--'+file);
		res.sendFile(file);
	});

	app.get('/dependencies/:folder1/:folder2/:file', function(req,res){
		console.log('path:'+ path.join(__dirname,'../node_modules',req.params.folder1,req.params.folder2, req.params.folder1,req.params.file) );
		res.sendFile(path.join(__dirname,'../node_modules',req.params.folder1, req.params.folder2, req.params.file));
	});

	app.get('/dependencies/:folder/:file', function(req,res){
		console.log('path:'+ path.join(__dirname,'../node_modules',req.params.folder, req.params.file) );
		res.sendFile(path.join(__dirname,'../node_modules',req.params.folder, req.params.file));
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

	app.get('/getParents', function(req, res){
		let person = JSON.parse(req.query.person);
		console.log('person name = '+person);
		res.json({ mom:{name:person.name+'MOM'}, father: {name:person.name+'PAPI'} });
	});
	

	// normal routes

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname,'../views/index.html'));
	});

	

	app.get('/template/:file', function(req, res){
		res.sendFile(path.join(__dirname,'../views/templates',req.params.file));
	});
}