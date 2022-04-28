import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1650975109126-60e001a9f01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Aubin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
            <h1>Lobing</h1>
            <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
