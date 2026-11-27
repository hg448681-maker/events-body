"use client";

import { useEffect, useState } from "react";
import EncabezadoSaludo from "../moleculas/EncabezadoSaludo";
import TarjetaPuntosRegalo from "../moleculas/TarjetaPuntosRegalo";
import SeccionEventos from "../moleculas/SeccionEventos";
import MenuInferior from "../moleculas/MenuInferior";
import { Evento } from "../moleculas/FichaPlan";
import "./PanelInicio.css";

export default function PanelInicio() {
  const [listaEventos, setListaEventos] = useState<Evento[]>([]);
  const [puntos, setPuntos] = useState(850);
  const [reclamado, setReclamado] = useState(false);

  useEffect(() => {
    fetch("https://6b0625b357fa1297bb557c8e.mockapi.io/api/v1/eventos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setListaEventos(data);
        }
      })
      .catch(() => {});

    fetch("https://6b0625b357fa1297bb557c8e.mockapi.io/api/v1/reservas")
      .then((res) => res.json())
      .then((reservas) => {
        if (Array.isArray(reservas)) {
          setPuntos(850 + reservas.length * 100);
        }
      })
      .catch(() => {});
  }, []);

  const fineDining = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "fine dining"
  );
  const liveSport = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "live sport"
  );
  const musicEvents = listaEventos.filter(
    (e) => e.categoria?.toLowerCase() === "music events"
  );

  const handleClaim = () => {
    if (!reclamado) {
      setPuntos((prev) => prev + 50);
      setReclamado(true);
    }
  };

  return (
    <div className="marco-iphone organismo-panel-inicio">
      <EncabezadoSaludo puntos={puntos} />
      <TarjetaPuntosRegalo puntos={puntos} onClaim={handleClaim} />

      <SeccionEventos titulo="Fine Dining" eventos={fineDining} />
      <SeccionEventos titulo="Live Sport" eventos={liveSport} />
      <SeccionEventos titulo="Music Events" eventos={musicEvents} />

      <MenuInferior />
    </div>
  );
}