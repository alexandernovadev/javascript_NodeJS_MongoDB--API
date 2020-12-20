'use strict'

var express = require('express');
var TopicController = require('../controllers/topic');
var router = express.Router();
var md_auth = require('../middlewares/auth');

router.get('/test', TopicController.test);  

// Guardar Topic
router.post('/topic/image', md_auth.auth, TopicController.uploadImage);  
router.post('/topic/save', md_auth.auth,TopicController.save);  

// Obtener img Topics
router.get('/topic/img/:filename', TopicController.image);

// Listar Topics con Paginador WUAAAAU
router.get('/topics/:page?', TopicController.getTopics);  

// Listar Por ID
router.get('/topic/:id', TopicController.getTopic);
router.post('/topic/edit/image/:name/:id', md_auth.auth, TopicController.updateimage);


// Listar los Topics por User
router.get('/user-topics/:user?', TopicController.getTopicsByUser);

router.put('/topic/update', md_auth.auth, TopicController.update);

router.delete('/delete/:id', md_auth.auth, TopicController.delete);

router.get('/search/:search', TopicController.search);


module.exports = router;