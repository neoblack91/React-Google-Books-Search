import axios from "axios";

const Api = {
  googleSearch: function (book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
  },
  saveBook: function (bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },

  getBooks: function () {
    return axios.get("/api/books");
  },

  // getBook: function (id) {
  //   return axios.get("/api/books" + id);
  // },

  deleteBooks: function (id) {
    console.log(id);
    return axios.delete("/api/books/" + id);
  },
};
export default Api;
