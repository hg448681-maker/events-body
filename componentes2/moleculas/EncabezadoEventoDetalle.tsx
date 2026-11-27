"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BotonAccionRapida from "../atomos/BotonAccionRapida";
import "./EncabezadoEventoDetalle.css";

interface EncabezadoEventoDetalleProps {
  id?: string;
  titulo: string;
  imagen: string;
  ubicacion: string;
  favoritoInicial?: boolean;
}

export default function EncabezadoEventoDetalle({
  id,
  titulo,
  imagen,
  ubicacion,
  favoritoInicial = false,
}: EncabezadoEventoDetalleProps) {
  const router = useRouter();
  const [guardado, setGuardado] = useState(favoritoInicial);

  const fotoHero = String(id) === "1" ? "/comida.png" : imagen;

  return (
    <header className="molecula-encabezado-evento-detalle">
      <div className="encabezado-detalle-hero-box">
        <img src={fotoHero} alt={titulo} className="encabezado-detalle-hero-img" />

        <div className="encabezado-detalle-hero-top">
          <button
            type="button"
            className="btn-hero-oscuro"
            onClick={() => router.push("/")}
          >
            ‹
          </button>

          <button type="button" className="btn-hero-oscuro">
            ⋮
          </button>
        </div>

        <button type="button" className="pill-ver-todo-blanca">
          <img src="/galeria.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>View All (5)</span>
        </button>
      </div>

      <div className="encabezado-detalle-info-principal">
        <h1 className="encabezado-detalle-titulo">{titulo}</h1>

        <div className="encabezado-detalle-direccion">
          <img src="/location.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>{ubicacion}</span>
        </div>

        <div className="encabezado-detalle-pildoras-fila">
          <BotonAccionRapida icono="/subir.svg" texto="Share" />
          <BotonAccionRapida
            icono={guardado ? "/heartrojo.svg" : "/heart.svg"}
            texto={guardado ? "Saved" : "Save"}
            onClick={() => setGuardado(!guardado)}
          />
          <BotonAccionRapida icono="/medalla.svg" texto="100pts" />
        </div>
      </div>
    </header>
  );
}