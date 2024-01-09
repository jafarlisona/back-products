import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (
      title !== "" &&
      image !== "" &&
      price !== "" &&
      description !== "" &&
      category !== ""
    ) {
      fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, image, description, category }),
      }).then((x) => navigate("/"));
    } else {
      const input = document.body.querySelectorAll("input");
      input.forEach((x) => (x.placeholder = "Enter something..."));
    }
  }
  function handleChange(e, stateChanger) {
    if (e.target.value.length > 0) {
      stateChanger(e.target.value);
    }
  }
  return (
    <section>
      <div className="add">
        <form action="#" onSubmit={handleSubmit}>
          <p>
            Title:{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => handleChange(e, setTitle)}
            />
          </p>
          <p>
            Price:{" "}
            <input
              type="text"
              value={price}
              onChange={(e) => handleChange(e, setPrice)}
            />
          </p>
          <p>
            Description:{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => handleChange(e, setDescription)}
            />
          </p>
          <p>
            Category:{" "}
            <input
              type="text"
              value={category}
              onChange={(e) => handleChange(e, setCategory)}
            />
          </p>
          <p>
            Image:{" "}
            <input
              type="text"
              value={image}
              onChange={(e) => handleChange(e, setImage)}
            />
          </p>
          <button>ADD</button>
        </form>
      </div>
    </section>
  );
}

export default AddPage;
