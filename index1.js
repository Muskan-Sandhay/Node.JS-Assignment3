import express from "express";
const app = express(); 
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
    res.send('<h1> group 10 : Muskan Sandhay, Harshita and Piyush</h1>');
})