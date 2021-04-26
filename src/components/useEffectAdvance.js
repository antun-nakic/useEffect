import React, { useState, useEffect } from "react";

const useEffectAdvance = () => {
  const [brojac, setBrojac] = useState(0);
  const [reset, setReset] = useState(false);

  const resetiraj = () => {
    setReset(true);
    setBrojac(0);
  };

  useEffect(() => {
    console.log("Dobar dan!");
  }, []);

  useEffect(() => {
    if (brojac > 0) console.log("Povećali ste brojač!");
  }, [brojac]);

  useEffect(() => {
    console.log("Resetirali ste brojač");
  }, [reset]);

  return (
    <div>
      <h4>Brojač: {brojac}</h4>
      <button type='button' onClick={() => setBrojac(brojac + 1)}>
        Povećaj
      </button>
      <button type='button' onClick={() => resetiraj()}>
        Resetiraj
      </button>
    </div>
  );
};

export default useEffectAdvance;
