import React, { useEffect, useState } from "react";
import Api from "../../util/Api";
import "../../stlye.css";

function Saved() {
  const [library, setLibrary] = useState(null);

  const recover = function () {
    Api.getBooks().then(function (res) {
      setLibrary(res.data);
    });
  };
  useEffect(() => {
    if (!library) {
      recover();
    }
  }, [library]);

  const deletion = function deletion(id) {
    Api.deleteBooks(id).then(function (res) {
      recover();
    });
  };

  return (
    <div>
      {library ? (
        library.map((books) => {
          return (
            <div className="container">
              <div className="bookResult" key={books._id}>
                <div className="row">
                  <div className="col-md-9">
                    <p className="title">{books.title}</p>
                    <p className="author">{books.authors}</p>
                  </div>
                  <div className="col-md-3">
                    <a href={books.link}>
                      {" "}
                      <button
                        className="btn viewBtn"
                        href={books.link}
                        target="_blank"
                      >
                        View
                      </button>
                    </a>
                    <button
                      className="btn deleteBtn"
                      onClick={() => deletion(books._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={
                        books.image
                          ? books.image
                          : "https://i.imgur.com/lrPn7VM.jpeg"
                      }
                      alt={books.title}
                    />
                  </div>
                  <div className="col-md-9">
                    <p className="plot">{books.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1> no save books</h1>
      )}
    </div>
  );
}

export default Saved;
