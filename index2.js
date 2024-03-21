import express from "express";
import data from './data/MOCK_DATA.json' assert { type: 'json' };
const app = express(); 
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.get('/students', (req, res) => {
    res.json(data);
})
