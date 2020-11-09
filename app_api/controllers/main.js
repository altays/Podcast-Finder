const mongoose = require('mongoose')
const Pod = mongoose.model('Podcast')

const podcastCreate = (req,res) => {
    Pod.create({
        name: req.body.name,
        episodeTitle: req.body.episodeTitle,
        episodeDescription: req.body.episodeDescription,
        scavLink: req.body.scavLink,
        imageURL: req.body.imageURL,
        episodeNumber: req.body.episodeNumber
    }, (err,podcast) => {
        if (err) {
            res
                .status(400)
                .json(err)
        } else {
            res
                .status(200)
                .json(podcast)
        }
    })
}

const podcastSearchDB = (req,res) => {
    let searchParams = req.params.searchCriteria.split(" ")
    let builtRegexSearch = regexBuilder(searchParams)
    
    function regexBuilder(params) {
        let regString = ""
        for (let i = 0; i < params.length; i++) {
            regString += "(?=.*" + params[i] + ")"
        }
        return regString + ".*"
    }

    let regexSearch = new RegExp(builtRegexSearch, "i")
    Pod
        .find({"$or":[{name:regexSearch},{episodeTitle:regexSearch},{episodeDescription:regexSearch}]}).limit(12)
        .exec((err, podcast) => {
            if(!podcast) {
                return res
                    .status(404)
                    .json({"message": "podcast not found"})
                    
            } else if (err) {
                return res
                    .status(404)
                    .json(err)
            }
            res
                .status(200)
                .json(podcast)
        });
}

// return six random podcasts
const podcastSearchInit = (req,res) => {
    Pod
        .aggregate([ { $sample: { size: 12 } } ])
        .exec((err, podcast) => {
            if(!podcast) {
                return res
                    .status(404)
                    .json({"message": "podcasts not found"})
            } else if (err) {
                return res
                    .status(404)
                    .json(err)
            }
            res
                .status(200)
                .json(podcast) 
        });
}

module.exports = {
    podcastCreate,
    podcastSearchDB,
    podcastSearchInit
}