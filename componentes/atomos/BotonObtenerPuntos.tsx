import "./BotonObtenerPuntos.css";

export default function BotonObtenerPuntos({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="atomo-btn-obtener-puntos" onClick={onClick}>
      Claim
    </button>
  );
}