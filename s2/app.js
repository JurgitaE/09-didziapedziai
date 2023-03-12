const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const app = express();
const port = 3003;

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

console.log(`http://localhost:3003/`);

// API
app.get('/numbers', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);

    res.json(allData);
});


app.post('/numbers', (req, res) => {
    let allData = fs.readFileSync('./data/numbers.json', 'utf8');
    allData = JSON.parse(allData);

    const id = uuidv4();
    allData = JSON.stringify([...allData, { ...req.body, id }]);
    fs.writeFileSync('./data/numbers.json', allData, 'utf8');

    res.json({ message: { text: 'New number is saved', type: 'ok' } });

});

app.listen(port, () => {
    console.log(`Lucky is on port number: ${port}`);
});
// npm install express


