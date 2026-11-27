import "./BotonSecundarioBorde.css";

export default function BotonSecundarioBorde({
  texto,
  onClick,
}: {
  texto: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="atomo-btn-secundario-borde"
      onClick={onClick}
    >
      {texto}
    </button>
  );
}