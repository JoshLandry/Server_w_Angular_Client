'use strict';
var Goat = require('./models/Goat');
var bodyparser = require('body-parser');

module.exports = function (router) {

	router.use(bodyparser.json());

	router.get('/goats', function(req,res) {
		Goat.find({}, function(err, data) {
			if(err) return res.status(500).send({'msg': 'the goats ran off, and could not be retrieved.'});

			res.json(data);
		});
	});

	router.post('/goats', function(req,res) {
		var newGoat = new Goat(req.body);
		newGoat.save(function(err, note) {
			if (err) return res.status(500).send({'msg': 'could not save goat.'});

			res.json(note);
		});
	});

	router.put('/goats/:id', function(req, res) {
	    var updatedGoat = req.body;
	    delete updatedGoat._id;
	    Goat.update({_id: req.params.id}, updatedGoat, function(err) {
	      if (err) return res.status(500).send({'msg': 'this goat has proved resistant to update.'});

	      res.json(req.body);
	    });
	});

	router.delete('/goats/:id', function(req, res) {
    	Goat.remove({_id: req.params.id}, true);
    	res.end();
  	});

};