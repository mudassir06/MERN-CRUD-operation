// Importing required modules
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Creating an instance of the Express application
const app = express();
app.use(express.json());

// Using the CORS middleware to handle cross-origin requests
app.use(cors());

// Creating a connection to the MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud"
});

// Establishing a connection to the database
db.connect(err => {
  if (err) {
    console.error("Error connecting to database", err);
  } else {
    console.log("Connected to database");
  }
});

// Defining a GET route for fetching all students
app.get("/", (req, res) => {
  const sql = "SELECT * FROM STUDENT";
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Database error occurred.", details: err.message });
    }
    return res.json(data);
  });
});

// Defining a POST route for creating a new student
app.post("/create", (req, res) => {
  const sql = "INSERT INTO STUDENT (`Name`, `Email`) VALUES (?, ?)";
  const values = [
    req.body.name,
    req.body.email
  ];
  db.query(sql, values, (err, queryResult) => {
    if (err) {
      return res.status(500).json({ error: "Database error occurred.", details: err.message });
    }
    return res.json({ message: "Data successfully inserted.", result: queryResult });
  });
});

// Defining a PUT route for updating a student's data
app.put("/update/:id", (req, res) => {
  const sql = "UPDATE student SET Name=?, Email=? WHERE ID=?";
  const values = [
    req.body.name,
    req.body.email
  ];
  const id = req.params.id;

  db.query(sql, [...values, id], (err, queryResult) => {
    if (err) {
      return res.status(500).json({ error: "Database error occurred.", details: err.message });
    }
    return res.json({ message: "Data successfully updated.", result: queryResult });
  });
});

// Defining a DELETE route for deleting a student
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE ID=?";
  const id = req.params.id;

  db.query(sql, [id], (err, queryResult) => {
    if (err) {
      return res.status(500).json({ error: "Database error occurred.", details: err.message });
    }
    return res.json({ message: "Data successfully deleted.", result: queryResult });
  });
});

// Starting the Express server to listen on port 3002
app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
