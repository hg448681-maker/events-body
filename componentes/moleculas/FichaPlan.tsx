"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import EtiquetaPrecio from "../atomos/EtiquetaPrecio";
import BotonMeGusta from "../atomos/BotonMeGusta";
import EtiquetaConIcono from "../atomos/EtiquetaConIcono";
import "./FichaPlan.css";

export interface Plan {
  id: string;
  categoria: string;
  titulo: string;
  imagen: string;
  precio: string;
  rating: string;
  ubicacion: string;
  fecha: string;
  hora: string;
  favorito: boolean;
}

export type Evento = Plan;

export default function FichaPlan({ evento }: { evento: Plan }) {
  const router = useRouter();
  const [fav, setFav] = useState(evento.favorito);

  return (
    <article
      className="molecula-ficha-plan"
      onClick={() => router.push(`/evento/${evento.id}`)}
    >
      <div className="ficha-plan-imagen-box">
        <img src={evento.imagen} alt={evento.titulo} className="ficha-plan-foto" />
        <div className="ficha-plan-overlay-top">
          <EtiquetaPrecio precio={evento.precio} />
          <BotonMeGusta
            activo={fav}
            onToggle={(e) => {
              e.stopPropagation();
              setFav(!fav);
            }}
          />
        </div>
      </div>

      <div className="ficha-plan-titulo-fila">
        <h3 className="ficha-plan-titulo">{evento.titulo}</h3>
        <EtiquetaConIcono icono="/estrella.svg" texto={evento.rating} negrita />
      </div>

      <EtiquetaConIcono icono="/location.svg" texto={evento.ubicacion} />

      {evento.categoria !== "Fine Dining" && (
        <div className="ficha-plan-meta-fila">
          <EtiquetaConIcono icono="/calendar.svg" texto={evento.fecha} />
          <EtiquetaConIcono icono="/clock.svg" texto={evento.hora} />
        </div>
      )}
    </article>
  );
}