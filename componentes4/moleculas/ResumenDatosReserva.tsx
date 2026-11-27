"use client";

import DatoResumenTexto from "../atomos/DatoResumenTexto";
import BotonSecundarioBorde from "../atomos/BotonSecundarioBorde";
import BotonPrincipal from "../../componentes3/atomos/BotonPrincipal";
import "./ResumenDatosReserva.css";

interface ResumenDatosReservaProps {
  fullName: string;
  email: string;
  phone: string;
  occasion: string;
  specialRequest: string;
  guardando: boolean;
  onEdit: () => void;
  onReserveNow: () => void;
}

export default function ResumenDatosReserva({
  fullName,
  email,
  phone,
  occasion,
  specialRequest,
  guardando,
  onEdit,
  onReserveNow,
}: ResumenDatosReservaProps) {
  return (
    <section className="molecula-resumen-datos-reserva">
      <h2 className="confirmacion-subtitulo">Dinner Details</h2>

      <DatoResumenTexto etiqueta="Full Name" valor={fullName} />
      <DatoResumenTexto etiqueta="Email Address" valor={email} />
      <DatoResumenTexto etiqueta="Phone Number" valor={phone} />
      <DatoResumenTexto etiqueta="Select an Occasion" valor={occasion} />
      <DatoResumenTexto
        etiqueta="Add a Special Request"
        valor={specialRequest || "No special requests"}
      />

      <div className="grupo-botones-confirmacion">
        <BotonSecundarioBorde texto="Edit Reservation Details" onClick={onEdit} />
        <BotonPrincipal
          texto={guardando ? "Saving..." : "Reserve Now"}
          onClick={onReserveNow}
          disabled={guardando}
        />
      </div>
    </section>
  );
}