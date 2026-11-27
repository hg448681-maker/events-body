import ItemDatoContacto from "../atomos/ItemDatoContacto";
import "./BloqueInfoContacto.css";

export default function BloqueInfoContacto({ titulo }: { titulo: string }) {
  return (
    <section className="molecula-bloque-info-contacto">
      <h2 className="bloque-info-titulo">About {titulo}</h2>
      <p className="bloque-info-descripcion">
        {titulo} introduces a Mexican and Peruvian dining experience serving small plates
        and innovative cocktails. From exquisite tacos to fine skewered meats from the
        Peruvian barbecue, the menu takes diners on a journey through the unique flavours
        of South America.
      </p>

      <div className="mapa-contenedor">
        <img src="/mapa.png" alt="Ubicación en mapa" className="mapa-img" />

        <div className="pin-mapa-superpuesto">
          <img
            src="/ubicacion_morado.svg"
            alt="Pin ubicación"
            style={{ width: "36px", height: "36px" }}
          />
        </div>

        <span className="btn-ver-mapa">
          <img src="/marca_ubi.svg" alt="" style={{ width: "16px", height: "16px" }} />
          <span>View Map Larger</span>
        </span>
      </div>

      <div className="tarjeta-contacto-detalle">
        <div className="fila-contacto-item">
          <ItemDatoContacto icono="/ubicacion_morado.svg" texto="Get Directions" negrita />
        </div>
        <div className="fila-contacto-item">
          <ItemDatoContacto icono="/telefono_morado.svg" texto="+34 213 00 68 94" />
        </div>
        <div className="fila-contacto-item sin-borde">
          <ItemDatoContacto icono="/mundo.svg" texto="http://leceisterkitchen.com?" />
        </div>
      </div>
    </section>
  );
}