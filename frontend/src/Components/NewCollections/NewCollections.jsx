import React, { useEffect, useState } from "react";
import "./newcollections.css";

import Item from "../Item/Item";

const NewCollections = () => {
  const [new_collections, setNew_collection] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://e-commerce-trenz.onrender.com/newcollections")
=======
    fetch("http://localhost:4000/newcollections")
>>>>>>> 6275a029bbbbd532d5eb9ce793805ca9206ddda2
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <div className="new-collections">
      <h2>NEW COLLECTIONS</h2>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollections;
