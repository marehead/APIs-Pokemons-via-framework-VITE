import flork from "../../assets/flork.png";

const Palpiteiro = ({ valor }) => {
  return (
    <>
      <h3>Palpitometro</h3>
      <p>E tem zero no bingo é?</p>
      {/* <img
        src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-97-png.png"
        alt="flork com carinha feliz juntando os dedos indicadores na altura do torax"
        width="45px"
      /> */}
      <img
        src={flork}
        alt="flork com carinha feliz juntando os dedos indicadores na altura do torax"
        width="45px"
      />
    </>
  );
};
export default Palpiteiro;
