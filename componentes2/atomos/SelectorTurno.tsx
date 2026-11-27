import "./SelectorTurno.css";

interface SelectorTurnoProps {
  hora: string;
  onSelect: (hora: string) => void;
}

export default function SelectorTurno({ hora, onSelect }: SelectorTurnoProps) {
  return (
    <button
      type="button"
      className="atomo-selector-turno"
      onClick={() => onSelect(hora)}
    >
      {hora}
    </button>
  );
}