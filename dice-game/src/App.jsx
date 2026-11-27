import { useState } from "react";

const dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function App() {
  const [dice, setDice] = useState(1);

  function rollDice() {
    const random = Math.floor(Math.random() * 6) + 1;
    setDice(random);
  }

  return (
    <div className="dice-app">
      <h1 className="title">Dice Roller</h1>

      <div className="dice">
        <h2>{dices[dice - 1]}</h2>
        <p>Rolled: {dice}</p>
      </div>

      <button onClick={rollDice} className="roll-button">
        Roll Dice
      </button>
    </div>
  );
}
