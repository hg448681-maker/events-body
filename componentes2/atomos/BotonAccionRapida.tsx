import "./BotonAccionRapida.css";

interface BotonAccionRapidaProps {
  icono: string;
  texto: string;
  onClick?: () => void;
}

export default function BotonAccionRapida({
  icono,
  texto,
  onClick,
}: BotonAccionRapidaProps) {
  return (
    <button type="button" className="atomo-boton-accion-rapida" onClick={onClick}>
      <img src={icono} alt="" style={{ width: "15px", height: "15px" }} />
      <span>{texto}</span>
    </button>
  );
}