import React from "react";
import "./MyHtml.css";
const MyHtml = () => {
  return (
    <div className="wrap-circles-html" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
      <div className="circle per-html">
        <div className="inner-html">90%</div>
      </div>
      <p style={{fontSize:"30px" ,fontWeight:"bold",marginTop:"35px"}}>HTML</p>
    </div>
  );
};

export default MyHtml;
