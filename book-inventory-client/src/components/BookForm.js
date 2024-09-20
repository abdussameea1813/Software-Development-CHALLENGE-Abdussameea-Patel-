import React, { useState } from 'react';

const BookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formattedDate = new Date(publication_date).toISOString().split('T')[0];
    
    const newBook = {
      title,
      author,
      genre,
      publication_date: formattedDate,
      isbn: isbn || null
    };
  
    try {
      await onBookAdded(newBook);
      // Clear the form fields
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublicationDate('');
      setIsbn('');
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Publication Date</label>
        <input
          type="date"
          className="form-control"
          value={publication_date}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>ISBN (Optional)</label>
        <input
          type="text"
          className="form-control"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">Add Book</button>
    </form>
  );
};

export default BookForm;