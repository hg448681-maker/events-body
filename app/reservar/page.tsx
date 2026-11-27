import { Suspense } from "react";
import PanelIngresoReserva from "@/componentes3/organismos/PanelIngresoReserva";

export default function ReservarPage() {
  return (
    <Suspense
      fallback={
        <div
          className="marco-iphone"
          style={{ padding: "40px 20px", textAlign: "center", color: "#db2777", fontWeight: 600 }}
        >
          Cargando...
        </div>
      }
    >
      <PanelIngresoReserva />
    </Suspense>
  );
}