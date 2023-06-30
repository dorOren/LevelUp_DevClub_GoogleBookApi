import { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const apiKey = "AIzaSyA5cuWMCgeaGNxo_Cz5gtMYlHBl3bGquNc";
  const maxResults = "40";
  const [search, setSearch] = useState("");
  const [booksData, setData] = useState([]);
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}&maxResults=${maxResults}`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container">
        <Card books={booksData} />
      </div>
    </>
  );
};

export default Main;
