import React, { Profiler } from "react";
import "./ProductCards.css";

const ProductCards = ({ product, del }) => {
  //   console.log(product);
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt="Product" />

      <div className="product-content">
        <h2 className="product-title">{product.title.substring(0, 20)}</h2>

        <p className="product-category">{product.category}</p>

        <p className="product-price">{product.price}</p>

        <button className="delete-btn" onClick={() => del(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
