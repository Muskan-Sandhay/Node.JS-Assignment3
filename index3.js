import express from "express";
import data from './data/MOCK_DATA.json' assert { type: 'json' };
const app = express(); 
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// to create the data object
app.post('/post',(req,res)=>{
    res.send('Item added successfully');
});
// to update the data object
app.put("/update", (req, res) =>{
    res.send("data updated");

});

//to delete data object
app.delete("/delete", (req,res)=>{ 
    res.send("data deleted");
});

//to read the data
app.get('/read',(req,res)=>{
    res.send(data);
});
