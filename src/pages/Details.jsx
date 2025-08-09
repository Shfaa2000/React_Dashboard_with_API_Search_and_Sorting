import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// this page to show more details about any product
const Details = () => {
  // get the id of product from api
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // every fetching include loading or error because of the api or internet
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Loading product ......</p>;
  if (!product) return <p>Product not found</p>;
  return (
    <div div className="mr-4 ml-4 bg-white">
      <div className="bg-blue-100 w-24 p-2 rounded-2xl flex justify-between text-2xl">
        <FaArrowLeft className="mt-1.5"></FaArrowLeft>
        <Link to="/">Back</Link>
      </div>
      <div className="maindetails flex justify-evenly mt-20">
        <img src={`${product.image}`} alt="" className="w-40"></img>
        <div className=" mt-6">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Title:</h1>
            <h3 className="w-50 ml-10">{product.title}</h3>
          </div>
          <div className="flex justify-between mt-6">
            <h1 className="font-bold text-3xl">Price:</h1>
            <h3 className="w-50 ml-10 font-bold text-3xl text-blue-700">
              {product.price}$
            </h3>
          </div>
          <div className="flex justify-between mt-6">
            <h1 className="font-bold text-3xl">Category:</h1>
            <h3 className="w-50 ml-10 text-green-600 text-2xl">
              {product.category}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <h1 className="font-bold text-3xl">Description:</h1>
        <h3 className="w-80 ml-10">{product.description}</h3>
      </div>
      <div className="flex mt-6">
        <h1 className="font-bold text-3xl">Rate:</h1>
        <h3 className="w-30 ml-10 font-bold text-3xl text-blue-700">
          {product.rating.rate}%
        </h3>
      </div>
      <div className="flex mt-6">
        <h1 className="font-bold text-3xl">Count:</h1>
        <h3 className="w-30 ml-10 font-bold text-3xl text-blue-700">
          {product.rating.count}
        </h3>
      </div>
    </div>
  );
};

export default Details;
