import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import { Link } from "react-router-dom";

// Create a Recipe Card component
const RecipeCard = ({ recipe }) => {
  // Replace with actual recipe data or component structure
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">{recipe.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Define your recipe data (modify this data as needed)
  const recipeData = [
    { name: "Masala Dosa", description: "A delicious South Indian dish." },
    { name: "Paneer Tikka", description: "The item is found  go to menue mage for more details" },
    { name: "Poori Bhaji", description: " The item is found Scroll down for more details" },
    { name: "Rava Idly", description: "The item is found Scroll down for more details" },
    { name: "Chocolate Truffle", description: "The item is found Scroll down for more details" },
    { name: "Mango Pastry", description: "The item is found Scroll down for more details" },
    { name: "Samosa", description: "The item is found Scroll down for more details" },
    { name: "Paneer Gheeroast", description: "The item is found  go to menue mage for more details" },
    { name: "Gobi manchurian", description: "The item is found  go to menue mage for more details" },
    { name: "Pulav", description: "The item is found  go to menue mage for more details" },
    { name: "PUNDI", description: "The item is found  go to menue mage for more details" },
    { name: "Paneer Tikka", description: "The item is found  go to menue mage for more details" },
    { name: "Gudbad Ice-cream", description: "The item is found  go to menue mage for more details" },
    // Add more recipes here
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const itemFound = searchLogic(searchQuery);
    setSearchResult(itemFound);
    setSearchQuery("");
  };

  const searchLogic = (query) => {
    // Implement your search logic here
    // For example, you can check if the query exists in your data
    // and return the corresponding recipe if found, null otherwise
    const foundRecipe = recipeData.find((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    return foundRecipe;
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-warning  navbar-dark mt-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className="text-danger">
              <img
                src="https://e7.pngegg.com/pngimages/24/963/png-clipart-creative-chef-cartoon-character-s-chef-cartoon-characters-thumbnail.png"
                alt="image-unavilable "
                className="log2"
              />
              Recipes
            </h1>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
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
            // Display the RecipeCard component for the found recipe
            <RecipeCard recipe={searchResult} />
          ) : (
            <div className="alert alert-danger" role="alert">
              Recipe not found!
            </div>
          )}
        </div>
      )}

      <nav aria-label="breadcrumb"></nav>
    </>
  );
};

export default Navbar;
