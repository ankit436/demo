import React, { useState, useEffect } from 'react';

const AsyncSearch = ({ apiUrl, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const search = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${apiUrl}?term=${searchTerm}`);
        const data = await response.json();

        if (isMounted) {
          setSearchResults(data.results);
        }
      } catch (error) {
        if (isMounted) {
          setError('Error fetching search results.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (searchTerm !== '') {
      search();
    } else {
      setSearchResults([]);
    }

    return () => {
      isMounted = false;
    };
  }, [apiUrl, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default AsyncSearch;




/* AsyncSearch.css */

.async-search-results {
  list-style: none;
  padding: 0;
}

.async-search-results li {
  margin-bottom: 5px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}

.async-search-results li:hover {
  background-color: #e0e0e0;
}

  
