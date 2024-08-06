import React from "react";
import "./Descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is an online destination where buyers shop for
          goods and sellers offer products and services. It's the hub of
          information about a company and what they sell. On an eCommerce
          website, you'll find product listings, eCommerce blog content, company
          history, and contact information.
        </p>
        <p>
          A multi-vendor eCommerce website is a platform where numerous
          third-party vendors sell their products. You can find websites like
          this in dozens of industries, including food and beverage, clothing
          and footwear, electronics, and cosmetics.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
