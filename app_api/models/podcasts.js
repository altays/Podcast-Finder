const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    episodeTitle: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    titleShort: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 23,
        trim: true
    },
    episodeDescription: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    scavLink: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    imageURL: { 
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    episodeNumber: { 
        type: Number,
        required: true
    }
})

mongoose.model('Podcast',podcastSchema)