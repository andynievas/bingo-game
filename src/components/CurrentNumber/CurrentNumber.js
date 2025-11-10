function Numero({ number, selected }) {
  return (
    <div className={`Numero ${selected ? "selected" : ""}`}>
      <span>{number}</span>
    </div>
  );
}

function CurrentNumber({
  number,
  numberInTablero,
  lastThreeSelected = [],
  newRandomNumber,
  reset,
}) {
  return (
    <div className={`CurrentNumber ${numberInTablero ? "smaller" : ""}`}>
      <div className="current-number-container">
        <h3 className="numero">{number ? String(number) : " -- "}</h3>
      </div>

      <div id="last-three-container">
        {lastThreeSelected.map((lastNumber) => {
          return <Numero number={lastNumber} selected={true} />;
        })}
      </div>

      <button
        className="random"
        onClick={numberInTablero ? null : newRandomNumber}
      >
        Sortear
      </button>

      {/* <button className="reset" onClick={reset}>Reiniciar</button> */}
    </div>
  );
}

export default CurrentNumber;
