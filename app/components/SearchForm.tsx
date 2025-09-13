"use client";

import React, { useState } from 'react';
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
  const [searchQuery, setSearchQuery] = useState(query || '');

  const handleReset = () => {
    setSearchQuery(''); // Clear the input field
  };

  return (
    <>
      <Form className="search-form" action="/" scroll={false}>
        <input
          name="query"
          value={searchQuery} // Use `value` instead of `defaultValue`
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
          className="search-input"
          placeholder="Search Startups..."
        />

        <div className="flex gap-2">
          {searchQuery && <SearchFormReset onReset={handleReset} />} {/* Pass reset handler */}
        </div>

        <button type="submit" className="btn-circle bg-black-200 text-white p-3 cursor-pointer">
          <Search />
        </button>
      </Form>
    </>
  );
};

export default SearchForm;