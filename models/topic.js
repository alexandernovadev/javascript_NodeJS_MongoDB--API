'use strict'

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var Schema = mongoose.Schema;

// Modelo de Topic
var TopicSchema = Schema ({
    title: String,
    content: String,
    image: String,
    date: {type: Date, default: Date.now},
});

// Cargar paginacion
TopicSchema.plugin(mongoosePaginate);

module.exports  = mongoose.model('Topic', TopicSchema);
