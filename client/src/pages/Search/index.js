import React, { useState } from "react";
import Result from "../../components/result";
import Api from "../../util/Api";
import Find from "../../components/Search";
import "../../index.css";

function Search() {
  const [books, setBooks] = useState({
    bookList: [],
  });
  const [saveBooks, setSaveBooks] = useState({
    saveBooks: [],
  });
  const [typing, setTyping] = useState({
    searchTerm: "",
  });
  const handleSave = function handleSave(bookData) {
    console.log(handleSave);
    Api.saveBook(bookData);
    setSaveBooks({
      saveBooks,
      savedBooks: bookData,
    });
  };
  const handleTyping = function handleTyping(event) {
    event.preventDefault();
    setTyping({
      ...typing,
      searchTerm: event.target.value,
    });
  };
  const handleSubmit = function handleSubmit() {
    Api.googleSearch(typing.searchTerm).then(function (results) {
      setBooks({
        ...books,
        bookList: results.data.items,
      });
    });
  };
  return (
    <div className="container">
      <Find handleSubmit={handleSubmit} handleTyping={handleTyping} />

      {books.bookList.length > 0 ? (
        <Result book={books.bookList} handleSave={handleSave} />
      ) : (
        ""
      )}
    </div>
  );
}
export default Search;
