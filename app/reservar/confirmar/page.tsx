import { Suspense } from "react";
import PanelConfirmarReserva from "@/componentes4/organismos/PanelConfirmarReserva";

export default function ConfirmarReservaPage() {
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
      <PanelConfirmarReserva />
    </Suspense>
  );
}