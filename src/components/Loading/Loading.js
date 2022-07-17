import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-50px",
        marginLeft: "-50px",
        width: "100px",
        height: "100px",
      }}
    >
      <ReactLoading type="bars" color="#07447b" height={200} width={100} />
    </div>
  );
}
