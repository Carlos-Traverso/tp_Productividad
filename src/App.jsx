

import React, { useState } from "react";
import "./index.css";

const initialTips = [
  "Planificá tu día la noche anterior",
  "Aplicá la técnica Pomodoro",
  "Priorizá tareas importantes antes que urgentes",
  "Eliminá distracciones mientras trabajás",
  "Tomá pausas activas cada cierto tiempo",
  "Agrupá tareas similares",
  "Definí objetivos diarios claros",
  "Evitá multitarea innecesaria"
];

function getRandomIndex(exclude, length) {
  let idx;
  do {
    idx = Math.floor(Math.random() * length);
  } while (idx === exclude && length > 1);
  return idx;
}

function App() {
  // Estado para el índice del tip actual
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para los votos de cada tip
  const [votes, setVotes] = useState(Array(initialTips.length).fill(0));

  // Muestra un tip aleatorio diferente al actual
  const handleNextTip = () => {
    setCurrentIndex(prev => getRandomIndex(prev, initialTips.length));
  };

  // Suma un voto al tip actual
  const handleVote = () => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes];
      newVotes[currentIndex] += 1;
      return newVotes;
    });
  };

  // Lógica para encontrar el tip más votado
  const maxVotes = Math.max(...votes);
  const hasVotes = maxVotes > 0;
  const bestTipIndex = votes.indexOf(maxVotes);

  return (
    <div className="container">
      <h1 className="title">Tips de Productividad</h1>
      <div className="card">
        <h2 className="tip">{initialTips[currentIndex]}</h2>
        <div className="votes">Votos: {votes[currentIndex]}</div>
        <div className="buttons">
          <button className="vote" onClick={handleVote}>
            Votar este tip
          </button>
          <button className="next" onClick={handleNextTip}>
            Siguiente tip
          </button>
        </div>
      </div>

      <div className="best-tip-section">
        <h3>Tip más votado</h3>
        {hasVotes ? (
          <div className="best-tip-card">
            <div className="best-tip-text">{initialTips[bestTipIndex]}</div>
            <div className="best-tip-votes">Votos: {votes[bestTipIndex]}</div>
          </div>
        ) : (
          <div className="no-votes">Todavía no hay votos registrados</div>
        )}
      </div>
    </div>
  );
}

export default App;
