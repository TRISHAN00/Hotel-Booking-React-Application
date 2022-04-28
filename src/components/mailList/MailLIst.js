import React from "react";
import "./mailList.css";

const MailLIst = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Save time, save money!</h2>
      <span className="mailDesc">
        Sign up we'll send the best deals to you.
      </span>
      <div className="mailInputContainer">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailLIst;
