const express = require ('express');
const router = express.Router();
var path = require('path');


// get a list of ninjas from the db
router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
});

router.get('/about', function(req, res){
    res.sendFile(path.resolve(__dirname, '../public/about.html'))
});

router.get('/api/metadata/:id', function(req, res, next){
    res.sendFile(path.resolve(__dirname, `../public/metadata/${req.params.id}.json`))
});

router.get('/api/metadata/contract', function(req, res, next){
    res.sendFile(path.resolve(__dirname, `../public/metadata/contract.json`))
});

module.exports = router;
