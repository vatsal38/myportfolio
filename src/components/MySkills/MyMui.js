import React from "react";
import "./MyMui.css";
const MyMui = () => {
  return (
    <div
      className="wrap-circles-mui"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
    >
      <div className="circle per-mui">
        <div className="inner-mui">82%</div>
      </div>
      <p style={{ fontSize: "30px", fontWeight: "bold", marginTop: "35px" }}>
        MATRIAL UI
      </p>
    </div>
  );
};

export default MyMui;
