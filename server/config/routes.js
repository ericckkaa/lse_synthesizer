var serverController = require('./../controllers/server_controller.js')

module.exports = function(app){
	app.post('/register', serverController.register);
	app.post('/login', serverController.login);
	app.use(authenticateUser);
	app.get('/all', serverController.all);
	app.get('/logout', serverController.logout);
	app.get('/user', serverController.loggedUser);
	app.get('/patches', serverController.getYourPatches);
	app.get('/all_patches', serverController.getTheirPatches);
	app.post('/patch', serverController.createPatch);
}
function authenticateUser(req, res, next){
	if(req.session.user){
		next();
	}
	else{
		res.sendStatus(401);
	}
}
