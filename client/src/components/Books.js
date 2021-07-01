import React from "react";
import Api from "../util/Api";
import "../stlye.css"

function Books(props) {
  const handleSave = (yourBook) => {
    Api.saveBook(yourBook);
  };
  return props.book.map(function (book) {
    return (
      <div className="bookResult color" key={book.id}>
        <div className="row">
          <div className="col-md-9 color">
            <p className="title">{book.volumeInfo.title}</p>
            <p className="author">{book.volumeInfo.authors}</p>
          </div>

          <br />

          <div className="col-md-3 color">
            <a href={book.saleInfo.buyLink}>
              {" "}
              <button className="btn viewBtn ">
                <span className="btnSpan color">View</span>
              </button>
            </a>
            <button
              className="btn saveBtn color"
              onClick={() =>
                handleSave({
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors.join(", "),
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks.thumbnail,
                  link: book.saleInfo.buyLink,
                })
              }
            >
              <span className="btnSpan color">Save</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 color">
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://i.imgur.com/lrPn7VM.jpeg"
              }
              alt={book.title}
            />
          </div>
          <div className="col-md-9 color">
            <p className="plot">{book.volumeInfo.description}</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  });
}

export default Books;
