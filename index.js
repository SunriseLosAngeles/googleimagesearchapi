var gis = require('g-i-s');

var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 45084;  
const router = express.Router();
router.get('/', async function(req, res) {

    //console.log(req)

    // Access the provided 'search' query parameter

    await gis(req.query.search + ' Official Photo', function(error, results) {
        if (error) {
            console.log(error);
          }
          else {
            console.log(JSON.stringify(results, null, '  '));
            console.log(results[0])
            urlToDeliver = results[0].url
            res.json({ url: urlToDeliver });   
          }
    });

      console.log(urlToSend)

   
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);
