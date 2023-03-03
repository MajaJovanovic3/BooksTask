import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDebounce } from '../utils/helpers';
import './HomePage.css';

const HomePage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  const search = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${debouncedQuery}`,
    );
    const data = await response.json();
    setBooks(data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    if (debouncedQuery) {
      search();
    }
  }, [debouncedQuery]);

  const handleChange = (e) => {
    if (e.target.value != '') navigate(`/search/${e.target.value}`);
    else {
      navigate(`/`);
      setBooks([]);
    }
  };

  return (
    <div>
      <input
        type='text'
        value={query || ''}
        onChange={handleChange}
        className='text-field'
        placeholder='Search books by...'
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
