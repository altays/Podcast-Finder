const mongoose = require('mongoose')
const Pod = mongoose.model('Podcast')

// wip
const podcastCreate = (req,res) => {
    res
    .status(200)
    .json({"status":"success"})
    console.log(res)
}

const podcastSearchDB = (req,res) => {
    // need to figure out how to parse through request param
        // send individual words as delimited by ampersands from the front end
        // separate out into an array, splitting at ampersands
        // create a larger regex search -> need to work out a pattern for searching multiple keywords

    let regexSearch = new RegExp(req.params.searchCriteria, "i")

    Pod
        .find({"$or":[{name:regexSearch},{episodeTitle:regexSearch},{episodeDescription:regexSearch}]})
        .exec((err, podcast) => {
            if(!podcast) {
                console.log(podcast)
                return res
                    .status(404)
                    .json({"message": "podcast not found"})
                    
            } else if (err) {
                console.log(podcast)
                return res
                    .status(404)
                    .json(err)
            }
            console.log(podcast)
            res
                .status(200)
                .json({"status":"success"})
            
        });
}

// return six random podcasts
const podcastSearchInit = (req,res) => {
    Pod
        .aggregate([ { $sample: { size: 6 } } ])
        .exec((err, podcast) => {
            if(!podcast) {
                console.log(podcast)
                return res
                    .status(404)
                    .json({"message": "podcasts not found"})
                    
            } else if (err) {
                console.log(podcast)
                return res
                    .status(404)
                    .json(err)
            }
            console.log(podcast)
            res
                .status(200)
                .json({"status":"success"}) 
        });
}

module.exports = {
    podcastCreate,
    podcastSearchDB,
    podcastSearchInit
}