function CurrentNumber({ number, numberInTablero, newRandomNumber, reset }) {
  return (
    <div className={`CurrentNumber ${numberInTablero ? "smaller" : ""}`}>
      <div>
        <h3 className="numero">{number ? String(number) : " -- "}</h3>
      </div>

      <button onClick={numberInTablero ? null : newRandomNumber}>
        Nuevo numero aleatorio
      </button>

      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default CurrentNumber;
