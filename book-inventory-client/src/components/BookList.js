// components/BookList.js
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <BookItem 
            key={book.entry_id} 
            book={book} 
            onDelete={() => onDeleteBook(book.entry_id)} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookList;