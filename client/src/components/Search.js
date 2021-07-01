import React from "react";
import "../stlye.css";

function Find(props) {
  return (
    <div className="search container text-center color">
      <h3>Choose your Book</h3>
      <div id="searchForm">
        <form>
          <input onChange={props.handleTyping} placeholder="Search"></input>
        </form>
        <button
          className="btn"
          id="searchBtn"
          onClick={props.handleSubmit}
          color
        >
          Search!
        </button>
      </div>
      <br />
    </div>
  );
}

export default Find;
