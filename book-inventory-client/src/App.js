// App.js
import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import useBooks from './hooks/useBooks';
import FilterForm from './components/FilterFrorm';


const App = () => {
  const { books, addBook, deleteBook , filterBooks } = useBooks();
  const [showForm, setShowForm] = useState(false);

  const handleBookAdded = async (newBook) => {
    try {
      await addBook(newBook);
      setShowForm(false);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleBookDeleted = async (id) => {
    try {
      await deleteBook(id);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(books, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'books_inventory.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="container">
      <h1>Book Inventory</h1>
      <button className="btn btn-primary " onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Book"}
      </button>
      <button className="btn btn-secondary mx-5" onClick={handleExport}>
          Export Data
        </button>
      {showForm && <BookForm onBookAdded={handleBookAdded} />}
      <FilterForm  onFilter={filterBooks}></FilterForm>
      <BookList books={books} onDeleteBook={handleBookDeleted} />
    </div>
  );
};

export default App;