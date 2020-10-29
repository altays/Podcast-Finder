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
    let searchParams = req.params.searchCriteria.split("&")
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
        .find({"$or":[{name:regexSearch},{episodeTitle:regexSearch},{episodeDescription:regexSearch}]}).limit(6)
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