import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ title, price, img, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{
        width: "220px",
        border: "1px solid #eaeaea",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
      onClick={() => navigate("/detail/" + id)}
    >
      <div className="img" style={{ height: "200px" }}>
        <img
          src={img}
          alt="product image"
          width={"180px"}
          height={"200px"}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="text">
        <p>{title}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default Card;
