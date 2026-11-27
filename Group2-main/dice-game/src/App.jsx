import { useState } from "react";

const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
  const random = Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  return (
    <div className="dice-app">
      <h1 className="title">Dice Roller</h1>

      <div className="dice">
        <h2>⚀</h2>
        <p>Rolled: 1</p>
      </div>

      <button className="roll-button">Roll Dice</button>
    </div>
  );
}
