"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import EncabezadoEventoDetalle from "../moleculas/EncabezadoEventoDetalle";
import PanelReservaTurnos from "../moleculas/PanelReservaTurnos";
import BloqueInfoContacto from "../moleculas/BloqueInfoContacto";
import { Evento } from "../../componentes/moleculas/FichaPlan";
import "./PanelDetallePlan.css";

export default function PanelDetallePlan() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [evento, setEvento] = useState<Evento | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://6b0625b357fa1297bb557c8e.mockapi.io/api/v1/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
          setEvento(data);
        }
      })
      .catch(() => {});
  }, [id]);

  if (!evento) {
    return (
      <div className="marco-iphone organismo-panel-detalle-plan detalle-cargando-box">
        <div className="detalle-spinner-rosa" />
        <p className="detalle-cargando-texto">Cargando detalles...</p>
      </div>
    );
  }

  const handleSeleccionarHorario = ({
    invitados,
    fecha,
    hora,
  }: {
    invitados: string;
    fecha: string;
    hora: string;
  }) => {
    const query = new URLSearchParams({
      eventoId: evento.id,
      titulo: evento.titulo,
      imagen: evento.imagen,
      ubicacion: evento.ubicacion,
      invitados,
      fecha,
      hora,
    });
    router.push(`/reservar?${query.toString()}`);
  };

  return (
    <div className="marco-iphone organismo-panel-detalle-plan">
      <EncabezadoEventoDetalle
        id={evento.id}
        titulo={evento.titulo}
        imagen={evento.imagen}
        ubicacion={evento.ubicacion}
        favoritoInicial={evento.favorito}
      />

      <PanelReservaTurnos onSelectHora={handleSeleccionarHorario} />

      <BloqueInfoContacto titulo={evento.titulo} />
    </div>
  );
}