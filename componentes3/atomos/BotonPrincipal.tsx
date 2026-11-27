import "./BotonPrincipal.css";

interface BotonPrincipalProps {
  texto: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function BotonPrincipal({
  texto,
  onClick,
  disabled,
}: BotonPrincipalProps) {
  return (
    <button
      type="button"
      className="atomo-boton-principal"
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
}