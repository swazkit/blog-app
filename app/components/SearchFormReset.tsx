"use client";

import React from 'react';
import { X } from 'lucide-react';

const SearchFormReset = ({ onReset }: { onReset: () => void }) => {
  return (
    <div>
      <button
        type="button" // Use "button" type to avoid unintended form submission
        onClick={onReset} // Call the reset handler
        className="btn rounded-full"
      > 
        <X className="size-5" />
      </button>
    </div>
  );
};

export default SearchFormReset;