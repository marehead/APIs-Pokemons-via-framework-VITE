import react, { useState } from "react";
import Palpiteiro from "./Palpiteiro";

const ContadorPalpiteiro = () => {
  const [numero, setNumero] = useState(0);

  const somarUm = () => {
    setNumero((valor) => valor + 1);
  };

  const subtrairUm = () => {
    setNumero((valor) => valor - 1);
  };

  return (
    <>
      <button onClick={somarUm}>+</button>
      <p>{numero}</p>
      <button onClick={subtrairUm}>-</button>
      <br />
      <Palpiteiro  />
    </>
  );
};
export default ContadorPalpiteiro;
