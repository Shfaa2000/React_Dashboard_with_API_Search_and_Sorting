import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import {Table} from "../components/Table";
import { SearchBar } from "../components/SearchBar";

// this is the main page in project
// that shows the products in a table and make sort or search  on them
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState(true);

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => {
      return sortOrder ? a.price - b.price : b.price - a.price;
    });
    setProducts(sorted);
    setSortOrder(!sortOrder);
  };
  // this function get the data from the api link
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" bg-gray-200">
      <h1 className="font-bold text-6xl justify-center text-center p-4">
        Online Shop
      </h1>
      <div className="flex justify-evenly p-3 seso">
       <SearchBar search={search} setSearch={setSearch}/>
        <button
          className="bg-blue-300 w-40 p-2 rounded-4xl cursor-pointer flex justify-evenly"
          onClick={handleSort}
        >
          Sort by Price {sortOrder ? <FaSortAmountUp /> : <FaSortAmountDown />}
        </button>
      </div>
      <Table products={products} search={search}/>
    </div>
  );
};

export default HomePage;
