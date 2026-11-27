"use client";

import { useEffect, useState } from "react";
import SelectorTurno from "../atomos/SelectorTurno";
import "./PanelReservaTurnos.css";

interface PanelReservaTurnosProps {
  onSelectHora: (datos: { invitados: string; fecha: string; hora: string }) => void;
}

export default function PanelReservaTurnos({ onSelectHora }: PanelReservaTurnosProps) {
  const [invitados, setInvitados] = useState("2 Guests");
  const [fecha, setFecha] = useState("Today");
  const [abiertoInvitados, setAbiertoInvitados] = useState(false);
  const [abiertoFecha, setAbiertoFecha] = useState(false);

  useEffect(() => {
    setInvitados("2 Guests");
    setFecha("Today");
    setAbiertoInvitados(false);
    setAbiertoFecha(false);
  }, []);

  const opcionesInvitados = ["2 Guests", "3 Guests", "4 Guests", "5 Guests", "6 Guests"];
  const opcionesFecha = ["Today", "Wed, July 18", "Thu, July 19", "Fri, July 20"];

  const horasLunch = [
    "1:00 pm", "1:30 pm", "2:00 pm",
    "2:30 pm", "3:00 pm", "3:30 pm",
    "4:00 pm", "4:30 pm", "5:30 pm",
  ];
  const horasDinner = [
    "6:00 pm", "6:30 pm", "7:00 pm",
    "7:30 pm", "8:00 pm", "8:30 pm",
    "9:00 pm", "9:30 pm", "10:00 pm",
    "10:30 pm", "11:00 pm", "11:30 pm",
  ];

  return (
    <section className="molecula-panel-reserva-turnos">
      <div className="filtros-reserva-grid">
        <div className="dropdown-contenedor">
          <button
            type="button"
            className="btn-dropdown-limpio"
            onClick={() => {
              setAbiertoInvitados(!abiertoInvitados);
              setAbiertoFecha(false);
            }}
          >
            <img src="/grupo_personas.svg" alt="" style={{ width: "17px", height: "17px" }} />
            <span>{invitados}</span>
            <img
              src="/flecha_abajo.svg"
              alt=""
              style={{
                width: "12px",
                height: "12px",
                transform: abiertoInvitados ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>

          {abiertoInvitados && (
            <div className="menu-dropdown-flotante izquierda">
              {opcionesInvitados.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`opcion-dropdown ${invitados === opcion ? "activa" : ""}`}
                  onClick={() => {
                    setInvitados(opcion);
                    setAbiertoInvitados(false);
                  }}
                >
                  {opcion}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="dropdown-contenedor">
          <button
            type="button"
            className="btn-dropdown-limpio"
            onClick={() => {
              setAbiertoFecha(!abiertoFecha);
              setAbiertoInvitados(false);
            }}
          >
            <img src="/calendar.svg" alt="" style={{ width: "17px", height: "17px" }} />
            <span>{fecha}</span>
          </button>

          {abiertoFecha && (
            <div className="menu-dropdown-flotante derecha">
              {opcionesFecha.map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`opcion-dropdown ${fecha === opcion ? "activa" : ""}`}
                  onClick={() => {
                    setFecha(opcion);
                    setAbiertoFecha(false);
                  }}
                >
                  {opcion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bloque-turno">
        <h2 className="turno-titulo">Lunch</h2>
        <div className="grid-horas">
          {horasLunch.map((hora) => (
            <SelectorTurno
              key={hora}
              hora={hora}
              onSelect={(h) => onSelectHora({ invitados, fecha, hora: h })}
            />
          ))}
        </div>
      </div>

      <div className="bloque-turno" style={{ marginBottom: 0 }}>
        <h2 className="turno-titulo">Dinner</h2>
        <div className="grid-horas">
          {horasDinner.map((hora) => (
            <SelectorTurno
              key={hora}
              hora={hora}
              onSelect={(h) => onSelectHora({ invitados, fecha, hora: h })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}