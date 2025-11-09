function CurrentNumber({ number, newRandomNumber, reset }) {
  return (
    <div className="CurrentNumber">
      <div>
        <h3 className="numero">{number ? String(number) : " -- "}</h3>
      </div>

      <button onClick={newRandomNumber}>Nuevo numero aleatorio</button>

      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default CurrentNumber;
