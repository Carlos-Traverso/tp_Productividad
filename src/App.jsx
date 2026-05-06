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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [votes, setVotes] = useState(Array(initialTips.length).fill(0));

  const handleNextTip = () => {
    setCurrentIndex(prev => getRandomIndex(prev, initialTips.length));
  };

  const handleVote = () => {
    setVotes(prevVotes => {
      const newVotes = [...prevVotes];
      newVotes[currentIndex] += 1;
      return newVotes;
    });
  };

  const maxVotes = Math.max(...votes);
  const hasVotes = maxVotes > 0;
  const bestTipIndex = votes.indexOf(maxVotes);

  const secondaryTips = [
    {
      text: "Escribí tus tres tareas más importantes la noche anterior.",
      icon: "🕒",
      tag: "5 min lectura"
    },
    {
      text: "La regla de los 2 minutos: si algo toma menos de 2 minutos, hacelo ahora.",
      icon: "⚡",
      tag: "Alta eficiencia"
    },
    {
      text: "Limpia tu espacio digital semanalmente para reducir el ruido.",
      icon: "🧘",
      tag: "Calma mental"
    }
  ];

  return (
    <div className="main-bg">
      <header className="header">
        <div className="header-title">TRABAJO PRODUCTIVIDAD</div>
        <nav className="header-nav">
          <span className="active">Home</span>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="main-title">Tips de Productividad</h1>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1170&auto=format&fit=crop"
            alt="Escritorio ordenado"
          />
        </div>

        <p className="main-sub">
          Pequeños pasos, grandes cambios. Encontrá el ritmo natural para tus días de trabajo.
        </p>

        <div className="main-grid">
          <section className="tip-card">
            <h2 className="tip-title">{initialTips[currentIndex]}</h2>

            <div className="tip-votes">
              Votos: {votes[currentIndex]}
            </div>

            <div className="tip-actions">
              <button className="vote-btn" onClick={handleVote}>
                Votar Positivamente
              </button>

              <button className="next-btn" onClick={handleNextTip}>
                Siguiente Tip
              </button>
            </div>
          </section>

          <aside className="best-tip">
            <div className="best-tip-label">
              Tip con más votos
            </div>

            {hasVotes ? (
              <>
                <div className="best-tip-text">
                  {initialTips[bestTipIndex]}
                </div>

                <div className="best-tip-votes">
                  {votes[bestTipIndex]} votos
                </div>
              </>
            ) : (
              <div className="no-votes">
                No hay votos registrados
              </div>
            )}
          </aside>
        </div>

        <div className="secondary-tips">
          {secondaryTips.map((tip, idx) => (
            <div className="secondary-tip-card" key={idx}>
              <div className="secondary-tip-icon">
                {tip.icon}
              </div>

              <div className="secondary-tip-text">
                {tip.text}
              </div>

              <div className="secondary-tip-tag">
                {tip.tag}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;