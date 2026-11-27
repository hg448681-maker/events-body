import { Suspense } from "react";
import PanelDetallePlan from "@/componentes2/organismos/PanelDetallePlan";

export default function DetalleEventoPage() {
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
      <PanelDetallePlan />
    </Suspense>
  );
}