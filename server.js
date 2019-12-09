//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/robi3-new-interface'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/robi3-new-interface/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log(`Listen ${path.join(__dirname+'/dist/robi3-new-interface/index.html')} at ${process.env.PORT || 8080}`);