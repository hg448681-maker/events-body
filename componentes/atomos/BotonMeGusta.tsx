"use client";

import "./BotonMeGusta.css";

interface BotonMeGustaProps {
  activo: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

export default function BotonMeGusta({ activo, onToggle }: BotonMeGustaProps) {
  return (
    <button type="button" className="atomo-btn-me-gusta" onClick={onToggle}>
      <img
        src={activo ? "/heartrojo.svg" : "/heart.svg"}
        alt="Favorito"
        style={{ width: "16px", height: "16px" }}
      />
    </button>
  );
}