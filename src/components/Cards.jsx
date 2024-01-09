import React, { useEffect, useState } from "react";
import Card from "./Card";

function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <div
        className="cards"
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" ,rowGap:"40px"}}
      >
        {products.map((x) => (
          <Card
            key={x._id}
            id={x._id}
            title={x.title}
            price={x.price}
            img={x.image}
            category={x.category}
            description={x.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
