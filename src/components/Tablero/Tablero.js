function Numero({ number, selected }) {
  return (
    <div className={`Numero ${selected ? "selected" : ""}`}>
      <span>{number}</span>
    </div>
  );
}

function Tablero({ selectedNumbers, currentNumber }) {
  return (
    <div className="Tablero">
      {selectedNumbers.map((row) => {
        return (
          <div className="fila">
            {row.map(({ number, selected }) => {
              return <Numero number={number} selected={selected} />;
            })}
          </div>
        );
      })}

      <div id="current-number-pop-up">
        <div className="CurrentNumber">
          <div>
            <h3 className="numero">
              {currentNumber ? String(currentNumber) : " -- "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablero;
