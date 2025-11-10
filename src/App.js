import { useState } from "react";
import "./App.css";
import Tablero from "./components/Tablero/Tablero";
import CurrentNumber from "./components/CurrentNumber/CurrentNumber";

const min = 1;
const max = 90;

const initialNums = new Array(9).fill("-").map((row, index_a) => {
  return new Array(10).fill("-").map((_, index_b) => ({
    number: String(index_a * 10 + index_b + 1).padStart(2, "0"),
    selected: false,
  }));
});

const newRandomNumber = () => {
  const newNumber = Math.random();
  const randomNumberMultiplicado = Math.ceil(newNumber * 100);
  return String(randomNumberMultiplicado).padStart(2, "0");
};

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState(initialNums);
  const [lastThreeSelected, setLastThreeSelected] = useState([]);
  const [number, setNumber] = useState(null);
  const [numberInTablero, setNumberInTablero] = useState(null);
  const [totalSelectedNumbers, setTotalSelectedNumbers] = useState(0);

  const numIsValid = (numero) => {
    if (numero >= min && numero <= max) {
      const foundNumber = selectedNumbers.find((row) => {
        return row.find(
          (numeroEnFila) =>
            numeroEnFila.number === numero && !numeroEnFila.selected
        );
      });

      return Boolean(foundNumber);
    }

    return false;
  };

  const nuevoNumeroValido = (numer) => {
    const isValid = numer && numIsValid(numer);

    if (isValid) {
      return numer;
    } else {
      const aleatorio = newRandomNumber();

      return nuevoNumeroValido(aleatorio);
    }
  };

  const selectNewNumber = () => {
    if (numberInTablero) {
      return;
    }
    if (totalSelectedNumbers >= 90) {
      return;
    }

    const numero = nuevoNumeroValido();

    const nuevaLista = selectedNumbers.map((row) => {
      return row.map((numeroEnFila) => {
        if (numeroEnFila.number === numero) {
          return {
            number: numeroEnFila.number,
            selected: true,
          };
        } else {
          return numeroEnFila;
        }
      });
    });

    setNumber(numero);

    setLastThreeSelected((prev) => {
      const newLastThree = [numero, ...prev];
      if (prev.length >= 3) newLastThree.pop();
      return newLastThree;
    });

    setNumberInTablero(numero);
    setTimeout(() => {
      setNumberInTablero(null);
    }, 3000);

    setTotalSelectedNumbers((prev) => prev + 1);

    setSelectedNumbers(nuevaLista);
  };

  const restartGame = () => {
    setSelectedNumbers(initialNums);
    setNumber(null);
    setLastThreeSelected([]);
    setTotalSelectedNumbers(0);
  };

  return (
    <div
      style={{
        minWidth: "1300px",
        overflow: "auto",
      }}
    >
      <header>
        <h1>BINGO</h1>
      </header>
      <div className="App">
        <Tablero
          selectedNumbers={selectedNumbers}
          numberInTablero={numberInTablero}
        />
        <CurrentNumber
          lastThreeSelected={lastThreeSelected}
          number={number}
          numberInTablero={numberInTablero}
          newRandomNumber={selectNewNumber}
          reset={restartGame}
        />
      </div>
    </div>
  );
}

export default App;
