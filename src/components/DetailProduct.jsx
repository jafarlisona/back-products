import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="details">
      <img src={product.image} alt="" />
      <div className="content">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          Category:
          <span> {product.category}</span>
        </p>
        <p>
          Price:
          <span> ${product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailProduct;
