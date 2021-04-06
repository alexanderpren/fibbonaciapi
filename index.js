const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');


const server = express();
server.use(cors());


// Configuring body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/fibonacci/:number', function (req, res) {
    const number = req.params.number;
    const array = []
    number_to_return = fibonacciFunction(number)

   

    res.status(200).send({response: number_to_return})
  


  });


  function fibonacciFunction(n) {
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    console.log(b)
    return b;
}


server.listen(3000, function () {
console.log('Server on port 3000'.red);

})