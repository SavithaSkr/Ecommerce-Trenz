import React from "react";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h2>Get Exclusives Offers On Your Email</h2>
      <p>Subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
