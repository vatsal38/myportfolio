import React from "react";
import './MyCss.css'
const MyCss = () => {
  return (
    <div className="wrap-circles-css" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
      <div className="circle per-css">
        <div className="inner-css">80%</div>
      </div>
      <p style={{fontSize:"30px" ,fontWeight:"bold",marginTop:"35px"}}>CSS</p>
    </div>
  );
};

export default MyCss;
