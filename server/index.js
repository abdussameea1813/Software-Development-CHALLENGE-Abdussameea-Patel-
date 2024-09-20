const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// Add a new book
app.post("/books", async (req, res) => {
    try {
        const { title, author, genre, publication_date, isbn } = req.body;

        // Validate required fields
        if (!title || !author || !genre || !publication_date) {
            return res.status(400).json({ error: "Title, author, genre, and publication date are required." });
        }

        // Check if ISBN is provided and exists
        if (isbn) {
            const existingBook = await pool.query(
                "SELECT * FROM bookinventory WHERE isbn = $1",
                [isbn]
            );

            console.log("Existing ISBN Check:", existingBook.rows); // Debug log

            if (existingBook.rows.length > 0) {
                return res.status(400).json({ error: "ISBN already exists." });
            }
        }

        const newBook = await pool.query(
            "INSERT INTO bookinventory (title, author, genre, publication_date, isbn) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, author, genre, publication_date, isbn || null] // Use null if ISBN is not provided
        );

        res.json(newBook.rows[0]);
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
});



// Get all books

app.get("/books", async (req, res) => {
    try {
        const allBooks = await pool.query("SELECT * FROM bookinventory");
        res.json(allBooks.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server error");
    }
});

// Geat a single book by ID

app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await pool.query('SELECT * FROM bookinventory WHERE entry_id = $1', [id]);

        if(book.rows.length === 0) {
            return res.status(404).json("Book not found");
        }

        res.json(book.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server error");
    }
});

// Update a book

app.put("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, genre, publication_date, isbn } = req.body;

        // Validate required fields
        if (!title || !author || !genre || !publication_date || !isbn) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const updateBook = await pool.query(
            "UPDATE bookinventory SET title = $1, author = $2, genre = $3, publication_date = $4, isbn = $5 WHERE entry_id = $6 RETURNING *",
            [title, author, genre, publication_date, isbn, id]
        );

        if (updateBook.rows.length === 0) {
            return res.status(404).json("Book not found");
        }

        res.json("Book was updated");
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json("Server error");
    }
});

// Delete a book

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM bookinventory WHERE entry_id = $1", [id]);
        res.json("Book was deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server error");
    }
});

// Start server
app.listen(5001, () => {
    console.log("Server has started at port 5001");
});
