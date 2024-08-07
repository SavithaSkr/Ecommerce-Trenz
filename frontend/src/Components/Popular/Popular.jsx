import React, { useEffect, useState } from "react";
import "./Popular.css";
//import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://e-commerce-trenz.onrender.com/popularinwomen")
=======
    fetch("http://localhost:4000/popularinwomen")
>>>>>>> 6275a029bbbbd532d5eb9ce793805ca9206ddda2
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className="popular">
      <h2>POPULAR IN WOMEN</h2>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
