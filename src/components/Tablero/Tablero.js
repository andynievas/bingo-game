function Numero({ number, selected }) {
  return (
    <div className={`Numero ${selected ? "selected" : ""}`}>
      <span>{number}</span>
    </div>
  );
}

function Tablero({ selectedNumbers, numberInTablero }) {
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

      {numberInTablero && (
        <div
          id="current-number-pop-up"
          className={`current-number-pop-up ${numberInTablero ? "andy" : "das"}`}
        >
          <div className="CurrentNumber">
            <div>
              <h3 className="numero">{String(numberInTablero)}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tablero;
