import React, { useState, useEffect } from "react";

const useEffectExpert = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", promijeniStanje);
    return () => {
      window.removeEventListener("resize", promijeniStanje);
    };
  }, [size]);

  const promijeniStanje = () => {
    setSize(window.innerWidth);
  };

  return (
    <div>
      <h4>Širina prozora</h4>
      <h2>{size} px</h2>
    </div>
  );
};

export default useEffectExpert;
