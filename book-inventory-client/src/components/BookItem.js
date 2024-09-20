// components/BookItem.js
import React from 'react';

const formatDate = (dateString) => {
  if (!dateString) return ''; 
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const BookItem = ({ book, onDelete }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{formatDate(book.publication_date)}</td>
      <td>{book.isbn}</td>
      <td>
        <button onClick={onDelete} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default BookItem;