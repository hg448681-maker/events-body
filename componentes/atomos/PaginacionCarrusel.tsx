import "./PaginacionCarrusel.css";

export default function PaginacionCarrusel({ activo = 0 }: { activo?: number }) {
  const items = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="atomo-paginacion-carrusel">
      {items.map((indice) =>
        indice === activo ? (
          <span key={indice} className="punto-rosa-activo" />
        ) : (
          <img
            key={indice}
            src="/Ellipse 7.svg"
            alt=""
            style={{ width: "6px", height: "6px" }}
          />
        )
      )}
    </div>
  );
}