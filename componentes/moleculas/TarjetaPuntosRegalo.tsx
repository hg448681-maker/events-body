import BotonObtenerPuntos from "../atomos/BotonObtenerPuntos";
import PaginacionCarrusel from "../atomos/PaginacionCarrusel";
import "./TarjetaPuntosRegalo.css";

interface TarjetaPuntosRegaloProps {
  puntos?: number;
  onClaim?: () => void;
}

export default function TarjetaPuntosRegalo({ puntos = 850, onClaim }: TarjetaPuntosRegaloProps) {
  return (
    <section className="molecula-tarjeta-puntos-regalo-wrapper">
      <div className="tarjeta-puntos-regalo-rosa">
        <div className="tarjeta-puntos-regalo-fila-superior">
          <div>
            <p className="tarjeta-puntos-regalo-titulo">Loyalty Points</p>
            <p className="tarjeta-puntos-regalo-puntos-valor">
              {puntos} <span>Pts</span>
            </p>
          </div>
          <img src="/regalo.svg" alt="Regalo" style={{ width: "68px", height: "68px" }} />
        </div>

        <p className="tarjeta-puntos-regalo-subtitulo">
          Earn more points and Enjoy exclusive benefits
        </p>

        <div className="tarjeta-puntos-regalo-caja-regalo">
          <div>
            <p className="tarjeta-puntos-regalo-regalo-titulo">Free 50 Points</p>
            <p className="tarjeta-puntos-regalo-regalo-sub">Time Remaining: 10:45:22</p>
          </div>
          <BotonObtenerPuntos onClick={onClaim} />
        </div>
      </div>
      <PaginacionCarrusel activo={0} />
    </section>
  );
}