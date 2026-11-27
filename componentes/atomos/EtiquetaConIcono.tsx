import "./EtiquetaConIcono.css";

interface EtiquetaConIconoProps {
  icono: string;
  texto: string;
  negrita?: boolean;
}

export default function EtiquetaConIcono({ icono, texto, negrita }: EtiquetaConIconoProps) {
  return (
    <div className="atomo-etiqueta-con-icono">
      <img src={icono} alt="" style={{ width: "14px", height: "14px", flexShrink: 0 }} />
      <span
        className="atomo-etiqueta-con-icono-texto"
        style={{
          fontWeight: negrita ? 700 : 400,
          color: negrita ? "#111827" : "#6b7280",
        }}
      >
        {texto}
      </span>
    </div>
  );
}