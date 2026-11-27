import "./DatoResumenTexto.css";

export default function DatoResumenTexto({
  etiqueta,
  valor,
}: {
  etiqueta: string;
  valor: string;
}) {
  return (
    <div className="atomo-dato-resumen">
      <p className="dato-resumen-titulo">{etiqueta}</p>
      <p className="dato-resumen-valor">{valor || "—"}</p>
    </div>
  );
}