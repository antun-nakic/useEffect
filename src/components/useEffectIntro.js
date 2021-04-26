import React, { useState, useEffect } from "react";

const useEffectIntro = () => {
  const [brojac, setBrojac] = useState(0);

  useEffect(() => {
    console.log("Pozvan use effect");
  }, [brojac]);

  console.log("Ponovno iscrtavanje");

  return (
    <div onClick={() => setBrojac(brojac + 1)}>
      <h4>Brojač: {brojac}</h4>
    </div>
  );
};

export default useEffectIntro;
