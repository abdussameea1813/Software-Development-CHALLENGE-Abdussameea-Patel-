

import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5001/books');
      setBooks(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books");
    }
  };

  const addBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:5001/books', newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
      return response.data;
    } catch (err) {
      console.error("Error adding book:", err);
      setError("Failed to add book");
      throw err;
    }
  };

  const deleteBook = async (id) => {
    try {
      // Make API call to delete the book from the database
      await axios.delete(`http://localhost:5001/books/${id}`);
      
      // If the API call is successful, update the local state
      setBooks((prevBooks) => prevBooks.filter(book => book.entry_id !== id));
      setError(null);
    } catch (err) {
      console.error("Error deleting book:", err);
      setError("Failed to delete book");
      throw err;
    }
  };

  const filterBooks = (criteria) => {
    const filtered = books.filter(book => 
    (!criteria.title || 
        book.title.toLowerCase().includes(criteria.title.toLowerCase())) && (!criteria.author || book.author.toLowerCase().includes(criteria.author.toLowerCase())) &&
        (!criteria.genre || book.genre.toLowerCase().includes(criteria.genre.toLowerCase()))
      );
      setFilteredBooks(filtered);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return { books: filteredBooks, addBook, deleteBook, filterBooks, error };
};


export default useBooks;