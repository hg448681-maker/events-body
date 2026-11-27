"use client";

import { useEffect } from "react";
import BotonPrincipal from "../../componentes3/atomos/BotonPrincipal";
import "./VentanaRecompensaPuntos.css";

const PARTICULAS = [
  { color: "#db2777", left: "15%", delay: "0s", dur: "1.6s", rot: "45deg" },
  { color: "#f59e0b", left: "22%", delay: "0.05s", dur: "1.9s", rot: "-60deg" },
  { color: "#10b981", left: "30%", delay: "0.1s", dur: "1.5s", rot: "120deg" },
  { color: "#be185d", left: "38%", delay: "0.02s", dur: "1.8s", rot: "-35deg" },
  { color: "#3b82f6", left: "45%", delay: "0.08s", dur: "1.7s", rot: "80deg" },
  { color: "#f472b6", left: "52%", delay: "0.04s", dur: "2.0s", rot: "-110deg" },
  { color: "#f59e0b", left: "60%", delay: "0.12s", dur: "1.6s", rot: "30deg" },
  { color: "#db2777", left: "68%", delay: "0.06s", dur: "1.85s", rot: "-75deg" },
  { color: "#10b981", left: "75%", delay: "0.03s", dur: "1.55s", rot: "95deg" },
  { color: "#be185d", left: "82%", delay: "0.09s", dur: "1.95s", rot: "-50deg" },
  { color: "#3b82f6", left: "26%", delay: "0.15s", dur: "1.75s", rot: "65deg" },
  { color: "#f472b6", left: "49%", delay: "0.11s", dur: "1.65s", rot: "-90deg" },
  { color: "#f59e0b", left: "72%", delay: "0.14s", dur: "1.8s", rot: "140deg" },
  { color: "#10b981", left: "18%", delay: "0.18s", dur: "1.9s", rot: "-25deg" },
];

function reproducirSonidoVictoria() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const notas = [523.25, 659.25, 783.99, 1046.5];

    notas.forEach((frecuencia, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(frecuencia, ctx.currentTime + index * 0.11);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + index * 0.11);
      gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + index * 0.11 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.11 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.11);
      osc.stop(ctx.currentTime + index * 0.11 + 0.36);
    });
  } catch {}
}

export default function VentanaRecompensaPuntos({
  onVolverInicio,
}: {
  onVolverInicio: () => void;
}) {
  useEffect(() => {
    reproducirSonidoVictoria();
  }, []);

  return (
    <div className="modal-overlay-oscuro">
      <div className="modal-tarjeta-blanca animacion-pop-modal">
        <div className="modal-cabecera-confeti">
          <img src="/confeti.png" alt="" className="modal-img-confeti" />

          <div className="capa-confeti-animado">
            {PARTICULAS.map((p, i) => (
              <span
                key={i}
                className="particula-confeti"
                style={{
                  backgroundColor: p.color,
                  left: p.left,
                  animationDelay: p.delay,
                  animationDuration: p.dur,
                  transform: `rotate(${p.rot})`,
                }}
              />
            ))}
          </div>

          <img
            src="/medalla.png"
            alt="Medalla 100 Puntos"
            className="modal-img-medalla animacion-medalla"
          />

          <button
            type="button"
            className="btn-cerrar-modal-rosa"
            onClick={onVolverInicio}
          >
            <img
              src="/boton X.svg"
              alt="Cerrar"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </button>
        </div>

        <div className="modal-cuerpo-texto">
          <h2 className="modal-puntos-titulo">
            100 <span>Pts</span>
          </h2>
          <p className="modal-puntos-texto">
            You have earned 100 Loyalty Points for the reservation done.
          </p>

          <BotonPrincipal
            texto="Make another Reservation"
            onClick={onVolverInicio}
          />
        </div>
      </div>
    </div>
  );
}