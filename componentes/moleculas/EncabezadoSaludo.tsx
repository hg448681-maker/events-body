import EtiquetaSaldoPuntos from "../atomos/EtiquetaSaldoPuntos";
import "./EncabezadoSaludo.css";

export default function EncabezadoSaludo({ puntos = 850 }: { puntos?: number }) {
  return (
    <header className="molecula-encabezado-saludo">
      <div className="encabezado-saludo-grupo">
        <h1 className="encabezado-saludo-titulo">Good Morning</h1>
        <EtiquetaSaldoPuntos puntos={puntos} />
      </div>

      <div className="encabezado-saludo-acciones">
        <button type="button" className="btn-notificaciones">
          <img src="/campana.svg" alt="Notificaciones" style={{ width: "20px", height: "20px" }} />
        </button>
        <img src="/perfil.png" alt="Usuario" className="avatar-perfil" />
      </div>
    </header>
  );
}