const express = require("express")
const cors = require("cors");
const mysql = require("mysql");
const app =express();

app.use(cors());
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})
app.get("/",(req,res)=>{
    const sql ="SELECT * FROM STUDENT";
    db.query(sql,(err,data)=>{
if(err) return res.json("error");
return res.json(data);

    })
})


app.listen(3002,()=>{
    console.log("listening");
})