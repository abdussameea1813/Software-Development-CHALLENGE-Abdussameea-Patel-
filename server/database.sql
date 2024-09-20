CREATE TABLE books (
    entry_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    publication_date DATE,
    isbn VARCHAR(20) UNIQUE NOT NULL
);
