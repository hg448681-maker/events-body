"use client";

import { useRouter, useSearchParams } from "next/navigation";
import CabeceraResumenReserva from "../moleculas/CabeceraResumenReserva";
import FormularioDetallesReserva from "../moleculas/FormularioDetallesReserva";
import "./PanelIngresoReserva.css";

export default function PanelIngresoReserva() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventoId = searchParams.get("eventoId") || "1";
  const titulo = searchParams.get("titulo") || "Leceister Square kitchen";
  const imagen = searchParams.get("imagen") || "/comida.png";
  const ubicacion = searchParams.get("ubicacion") || "31-36 Leicester Square, England";
  const invitados = searchParams.get("invitados") || "2 Guests";
  const fecha = searchParams.get("fecha") || "Wed, July 18";
  const hora = searchParams.get("hora") || "8:00 PM";

  const esEdicion = searchParams.get("edit") === "1";
  const datosIniciales = esEdicion
    ? {
        fullName: searchParams.get("fullName") || "",
        email: searchParams.get("email") || "",
        phone: searchParams.get("phone") || "",
        occasion: searchParams.get("occasion") || "",
        specialRequest: searchParams.get("specialRequest") || "",
      }
    : undefined;

  const handleProceed = (datosFormulario: {
    fullName: string;
    email: string;
    phone: string;
    occasion: string;
    specialRequest: string;
  }) => {
    const query = new URLSearchParams({
      eventoId,
      titulo,
      imagen,
      ubicacion,
      invitados,
      fecha,
      hora,
      ...datosFormulario,
    });
    router.push(`/reservar/confirmar?${query.toString()}`);
  };

  return (
    <div className="marco-iphone organismo-panel-ingreso-reserva">
      <CabeceraResumenReserva
        eventoId={eventoId}
        titulo={titulo}
        imagen={imagen}
        ubicacion={ubicacion}
        invitados={invitados}
        fecha={fecha}
      />

      <FormularioDetallesReserva
        datosIniciales={datosIniciales}
        onProceed={handleProceed}
      />
    </div>
  );
}