import "./ItemDatoContacto.css";

interface ItemDatoContactoProps {
  icono: string;
  texto: string;
  negrita?: boolean;
}

export default function ItemDatoContacto({ icono, texto, negrita }: ItemDatoContactoProps) {
  return (
    <div className="atomo-item-dato-contacto">
      <img src={icono} alt="" style={{ width: "18px", height: "18px", flexShrink: 0 }} />
      <span style={{ fontWeight: negrita ? 600 : 400 }}>{texto}</span>
    </div>
  );
}