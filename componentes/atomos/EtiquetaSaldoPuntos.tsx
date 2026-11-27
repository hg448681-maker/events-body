import "./EtiquetaSaldoPuntos.css";

export default function EtiquetaSaldoPuntos({ puntos = 850 }: { puntos?: number }) {
  return (
    <div className="atomo-etiqueta-saldo-puntos">
      <img src="/medalla.svg" alt="Puntos" style={{ width: "16px", height: "16px" }} />
      <span>{puntos} Points</span>
    </div>
  );
}