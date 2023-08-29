import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import { Link } from "react-router-dom";


//Newly changed and modivied nav bar 


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual search logic (sudhesh part)



    const itemFound = searchLogic(searchQuery);
    setSearchResult(itemFound);

    // Clear the search input 
    setSearchQuery("");
  };

  const searchLogic = (query) => {
    // Implement your search logic here
    // For example, you can check if the query exists in your data
    // and return true if found, false otherwise
    // Replace this example logic with your own data and search mechanism
    const data = ["Masala Dosa", "Poori Bhaji", "Rava Idly","Chocolate Truffle","Mango Pastry","Black Forest"]; // Replace with your data
    return data.includes(query);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-warning  navbar-dark mt-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 class="text-danger">
              <img
                src="https://e7.pngegg.com/pngimages/24/963/png-clipart-creative-chef-cartoon-character-s-chef-cartoon-characters-thumbnail.png"
                alt="image-unavilable "
                className="log2"
              />
              Recipies
            </h1>
          </Link>
          <div className="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navbar-brand" to="/Menu">
                  Menu
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navbar-brand" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navbar-brand" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <form className="form-inline ml-auto" onSubmit={handleSearchSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <Link className="btn btn-success mx-2" to="/login">
              Login
            </Link>

            <Link className="btn btn-primary mx-2" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {searchResult !== null && (
        <div className="container mt-3">
          {searchResult ? (
            <div className="alert alert-success" role="alert">
              Item found!
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Item not found!
            </div>
          )}
        </div>
      )}

      <nav aria-label="breadcrumb"></nav>
    </>
  );
};

export default Navbar;
