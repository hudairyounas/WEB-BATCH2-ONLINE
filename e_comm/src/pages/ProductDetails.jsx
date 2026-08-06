import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    getProductById(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="flex justify-center py-32"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
  }

  if (!product) {
    return <div className="text-center py-32"><h2 className="text-2xl font-bold">Product not found</h2><Link to="/shop" className="btn btn-primary mt-4">Back to Shop</Link></div>;
  }

  return (
    <div className="max-w-5xl mx-auto bg-base-100 rounded-3xl p-6 md:p-12 shadow-sm border border-base-200">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-2xl object-cover shadow-sm" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <div>
            <div className="badge badge-primary badge-outline mb-3">{product.category}</div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
          </div>
          <p className="text-3xl font-light">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-lg">{product.description}</p>
          
          <div className="pt-4 border-t border-base-200">
            <p className="mb-2 font-medium">Status: 
              <span className={product.stock > 0 ? "text-success ml-2" : "text-error ml-2"}>
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="join">
                <button className="btn btn-outline join-item" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <button className="btn btn-outline join-item pointer-events-none w-16">{quantity}</button>
                <button className="btn btn-outline join-item" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
              </div>
              <button 
                className="btn btn-primary flex-1 rounded-full text-lg h-12"
                disabled={product.stock === 0}
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;