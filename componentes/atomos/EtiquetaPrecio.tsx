import "./EtiquetaPrecio.css";

export default function EtiquetaPrecio({ precio }: { precio: string }) {
  return <span className="atomo-etiqueta-precio">{precio}</span>;
}