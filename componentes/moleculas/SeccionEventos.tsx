import TarjetaEvento, { Evento } from "./FichaPlan";
import "./SeccionEventos.css";

interface SeccionEventosProps {
  titulo: string;
  eventos: Evento[];
}

export default function SeccionEventos({ titulo, eventos }: SeccionEventosProps) {
  return (
    <section className="molecula-seccion-eventos">
      <div className="seccion-eventos-cabecera">
        <h2 className="seccion-eventos-titulo">{titulo}</h2>
        <span className="seccion-eventos-ver-todo">
          <span>See all</span>
          <img src="/flecha.svg" alt="" style={{ width: "12px", height: "12px" }} />
        </span>
      </div>

      <div className="seccion-eventos-scroll">
        {eventos.map((item) => (
          <TarjetaEvento key={item.id} evento={item} />
        ))}
      </div>
    </section>
  );
}