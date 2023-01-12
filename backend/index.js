import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blabladram4%6#",
    database: "test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello, this is backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q =  "INSERT INTO books (`title`, `dscr`, `price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.dscr,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("Book has been created")
    })
})

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully.")
    }) 
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `dscr` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.dscr,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.")
    }) 
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})
