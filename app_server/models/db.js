const mongoose = require('mongoose')
const readLine = require('readline')
const podcasts = require('./podcasts')

let dbURI;

if (process.env.NODE_ENV === 'production') {
   dbURI = process.env.MONGODB_URI;
} else {
   dbURI = 'mongodb://localhost/scavpoddatabase'
}

mongoose.connect(dbURI, {useUnifiedTopology: true, useNewUrlParser: true})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`)
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error:`, err)
})

mongoose.connection.on('disconnected', (err) => {
    console.log(`Mongoose disconnected`)
})

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};
   

if (process.platform === 'win32'){
    
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });

    rl.on ('SIGINT', () => {
        process.emit ("SIGINT");
    });
}

process.once('SIGUSR2', () => {
        gracefulShutdown('nodemon restart', () => {
            process.kill(process.pid, 'SIGUSR2');
    });
});
   
process.on('SIGINT', () => {
        gracefulShutdown('app termination', () => {
            process.exit(0);
    });
});

   process.on('SIGTERM', () => {
        gracefulShutdown('Heroku app shutdown', () => {
            process.exit(0);
    });
});