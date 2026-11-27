import "./CampoEntrada.css";

interface CampoEntradaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  tipo?: "text" | "email" | "textarea";
}

export default function CampoEntrada({
  label,
  placeholder,
  value,
  onChange,
  tipo = "text",
}: CampoEntradaProps) {
  return (
    <div className="atomo-campo-entrada-grupo">
      <label className="atomo-campo-entrada-label">{label}</label>
      {tipo === "textarea" ? (
        <textarea
          className="atomo-campo-entrada-textarea"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={tipo}
          className="atomo-campo-entrada-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}