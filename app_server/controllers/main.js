// Get Homepage

const index = function(req, res) {
    res.render('index', {
        title: 'Scavengers Network Podcast Database',
        podcasts: [{
            name: "Wet Hot American Moon Juice",
            episodeTitle:"Tracy, Morgan, and James: Sweet not Spicy (Microfiction Challenge: Round 2)",
            titleShort:"Tracy,Morgan, and James",
            episodeDescription: "In this episode we discuss the feedback we got for our Round 1 submissions and we talk about the experiences of the writers who moved on to Round 2! It's all the classic Whamjuice stuff: Process, reading stuff, joking about things. You know: Whamjuice!",
            scavLink:"https://www.scavengersnetwork.com/whamjuice",
            imageURL:"images/A_NaNoWriMo_Podcast.png"
         }, {
            name: "Alabaster's Habadashery",
            episodeTitle:"09.30.1880_JEFFREY_JEREMY",
            titleShort:"09.30.1880_JEFFREY_JEREMY",
            episodeDescription: "FILE TRANSMISSION SUCCESSFUL FILE INTEGRITY: 99.44444444445%",
            scavLink:"https://www.scavengersnetwork.com/alabaster",
            imageURL:"images/AH Logo MQ.jpg"
         },{
            name: "Can't Hardly Wait Minute",
            episodeTitle:"Minute 38: Mreston Pike",
            titleShort:"Minute 38: Mreston Pike",
            episodeDescription: "In this episode, Amanda begins her `who am I if I'm not Mike's girlfriend` monologue, Ron starts circling his prey, and we play our first FMK of the movie. It's a short but sweet episode that begs the question: Who was the Mike Dexter of YOUR class?",
            scavLink:"https://www.scavengersnetwork.com/jamesanderinminutemovies",
            imageURL:"images/CHMlogo1.jpg"
         },{
            name: "Spooky Spouses",
            episodeTitle:"Episode 134 - Mickey J. Mouse and Song Boos",
            titleShort:"Episode 134 - Mickey J. Mouse",
            episodeDescription: "Fun new game! If you want to see if a psychic is reeaallllllllyyy good at, ya' know, psychic stuff, all you have to do is commit a small crime and then go ask them about it. Maybe this idea isn't good? Or maybe it's pretty good? Let us know what happens when you try this at home! Just make sure your crime is, like, not really much of a crime at all.",
            scavLink:"https://www.scavengersnetwork.com/spookyspouses",
            imageURL:"images/Spooky Spouses logo.jpg"
         },{
            name: "Wet Hot American Moon Juice",
            episodeTitle:"Tracy, Morgan, and James: Sweet not Spicy (Microfiction Challenge: Round 2)",
            titleShort:"Tracy, Morgan, and James",
            episodeDescription: "In this episode we discuss the feedback we got for our Round 1 submissions and we talk about the experiences of the writers who moved on to Round 2! It's all the classic Whamjuice stuff: Process, reading stuff, joking about things. You know: Whamjuice!",
            scavLink:"https://www.scavengersnetwork.com/whamjuice",
            imageURL:"images/A_NaNoWriMo_Podcast.png"
         }, {
            name: "Alabaster's Habadashery",
            episodeTitle:"09.30.1880_JEFFREY_JEREMY",
            titleShort:"09.30.1880_JEFFREY_JEREMY",
            episodeDescription: "FILE TRANSMISSION SUCCESSFUL FILE INTEGRITY: 99.44444444445%",
            scavLink:"https://www.scavengersnetwork.com/alabaster",
            imageURL:"images/AH Logo MQ.jpg"
         },{
            name: "Can't Hardly Wait Minute",
            episodeTitle:"Minute 38: Mreston Pike",
            titleShort:"Minute 38: Mreston Pike",
            episodeDescription: "In this episode, Amanda begins her `who am I if I'm not Mike's girlfriend` monologue, Ron starts circling his prey, and we play our first FMK of the movie. It's a short but sweet episode that begs the question: Who was the Mike Dexter of YOUR class?",
            scavLink:"https://www.scavengersnetwork.com/jamesanderinminutemovies",
            imageURL:"images/CHMlogo1.jpg"
         },{
            name: "Spooky Spouses",
            episodeTitle:"Episode 134 - Mickey J. Mouse and Song Boos",
            titleShort:"Episode 134 - Mickey J. Mouse",
            episodeDescription: "Fun new game! If you want to see if a psychic is reeaallllllllyyy good at, ya' know, psychic stuff, all you have to do is commit a small crime and then go ask them about it. Maybe this idea isn't good? Or maybe it's pretty good? Let us know what happens when you try this at home! Just make sure your crime is, like, not really much of a crime at all.",
            scavLink:"https://www.scavengersnetwork.com/spookyspouses",
            imageURL:"images/Spooky Spouses logo.jpg"
         },{
            name: "Wet Hot American Moon Juice",
            episodeTitle:"Tracy, Morgan, and James: Sweet not Spicy (Microfiction Challenge: Round 2)",
            titleShort:"Tracy, Morgan, and James",
            episodeDescription: "In this episode we discuss the feedback we got for our Round 1 submissions and we talk about the experiences of the writers who moved on to Round 2! It's all the classic Whamjuice stuff: Process, reading stuff, joking about things. You know: Whamjuice!",
            scavLink:"https://www.scavengersnetwork.com/whamjuice",
            imageURL:"images/A_NaNoWriMo_Podcast.png"
         }, {
            name: "Alabaster's Habadashery",
            episodeTitle:"09.30.1880_JEFFREY_JEREMY",
            titleShort:"09.30.1880_JEFFREY_JEREMY",
            episodeDescription: "FILE TRANSMISSION SUCCESSFUL FILE INTEGRITY: 99.44444444445%",
            scavLink:"https://www.scavengersnetwork.com/alabaster",
            imageURL:"images/AH Logo MQ.jpg"
         },{
            name: "Can't Hardly Wait Minute",
            episodeTitle:"Minute 38: Mreston Pike",
            titleShort:"Minute 38: Mreston Pike",
            episodeDescription: "In this episode, Amanda begins her `who am I if I'm not Mike's girlfriend` monologue, Ron starts circling his prey, and we play our first FMK of the movie. It's a short but sweet episode that begs the question: Who was the Mike Dexter of YOUR class?",
            scavLink:"https://www.scavengersnetwork.com/jamesanderinminutemovies",
            imageURL:"images/CHMlogo1.jpg"
         },{
            name: "Spooky Spouses",
            episodeTitle:"Episode 134 - Mickey J. Mouse and Song Boos",
            titleShort:"Episode 134 - Mickey J. Mouse",
            episodeDescription: "Fun new game! If you want to see if a psychic is reeaallllllllyyy good at, ya' know, psychic stuff, all you have to do is commit a small crime and then go ask them about it. Maybe this idea isn't good? Or maybe it's pretty good? Let us know what happens when you try this at home! Just make sure your crime is, like, not really much of a crime at all.",
            scavLink:"https://www.scavengersnetwork.com/spookyspouses",
            imageURL:"images/Spooky Spouses logo.jpg"
         }]
    })
}

const about = (req, res, next) => {
    res.render('about', {title: 'About'})
}

module.exports = {
    index,
    about
}