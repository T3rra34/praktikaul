const express = require('express')
const app = express()
const fs = require('fs')



const PORT = 3125;

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        res.setHeader('content-type', 'text/html');
        res.send(html)
    });

})

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}.`)
})