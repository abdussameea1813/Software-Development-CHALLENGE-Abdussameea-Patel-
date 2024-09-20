// components/FilterForm.js
import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, author, genre });
  };

  return (
    <form  onSubmit={handleSubmit} className="mb-3 mt-5">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">Filter</button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;