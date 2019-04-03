const express = require('express');
const path = require('path');
const app = express();

var url ='http://www.behance.net/v2/projects/4889175?api_key=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM'

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use(express.static('./public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
    console.log('Server is running on port '+app.get('port'));
});
