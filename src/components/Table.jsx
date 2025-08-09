import React from "react";
import { Link } from "react-router-dom";

export const Table = ({ products , search}) => {
  const filteredProducts = products.filter((product) =>{ 
            return search.toLowerCase() === '' ? product :
            product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);})
  return (
    <table className="bg-white mt-6">
      <thead>
        <tr>
          <td className="id">ID</td>
          <td className="title">Title</td>
          <td className="price">Price</td>
          <td className="cat">Category</td>
          <td className="details">Details</td>
        </tr>
      </thead>
      <tbody>
        {/* searching and fetching every project */}
        {filteredProducts.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
              <Link to={`/details/${product.id}`}>More...</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
