import React from "react";
import Books from "./Books";

function Result({ book, handleSave }) {
  return (
    <div className="result container">
      <h3>Results</h3>
      <Books book={book} handleSave={handleSave} />
    </div>
  );
}

export default Result;
