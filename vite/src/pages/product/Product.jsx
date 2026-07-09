import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(5);

  const getProduct = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {product.slice(0, limit).map((item) => (
          <div className="w-full border-2 border-gray-500 my-2" key={item.id}>
            <h1 className="text-xl font-bold">{item.title}</h1>
            <img src={item.image} alt="" />
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      <button className="bg-red-700 text-white p-3 cursor-pointer m-5" onClick={() => setLimit(limit + 5)}>Load More</button>
      <button className="bg-red-700 text-white p-3 cursor-pointer m-5" onClick={() => setLimit(limit - 5)}>Load less</button>
    </>
  );
};

export default Product;
