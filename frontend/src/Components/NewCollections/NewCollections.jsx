import React, { useEffect, useState } from "react";
import "./newcollections.css";

import Item from "../Item/Item";

const NewCollections = () => {
  const [new_collections, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("https://e-commerce-trenz.onrender.com/newcollections")
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
