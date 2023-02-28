const express = require('express');
const app = express();
const port = 3003;

const menu = `
<a href="/">home</a>
<a href="/racoon">racoon</a>
<a href="/fox">fox</a>
`;

// SSR
app.get('/home', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello Forest!</h1>
    `);
});

app.get('/racoon', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello Racoon!</h1>
    `);
});

app.get('/fox', (req, res) => {
    res.send(`
    ${menu}
    <h1>Hello Fox!</h1>
    `);
});

// API
app.get('/api/home', (req, res) => {
    res.json({ title: 'Hello Forest!' });
});
app.get('/api/racoon', (req, res) => {
    res.json({ title: 'Hello RACOON!' });
});
app.get('/api/fox', (req, res) => {
    res.json({ title: 'Hello FOX!' });
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
console.log(`http://localhost:3003/`);

// npm install express


