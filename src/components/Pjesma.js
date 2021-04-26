import React from "react";

const Pjesma = (props) => {
  const { slika, naziv, funkcija, param } = props;
  return (
    <div
      onClick={() => funkcija(param)}
      style={{ width: "200px", margin: "30px" }}>
      <img style={{ width: "200px" }} src={slika}></img>
      <h4>{naziv}</h4>
    </div>
  );
};

export default Pjesma;
