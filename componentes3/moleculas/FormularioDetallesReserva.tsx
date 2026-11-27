"use client";

import { useEffect, useState } from "react";
import CampoEntrada from "../atomos/CampoEntrada";
import BotonPrincipal from "../atomos/BotonPrincipal";
import "./FormularioDetallesReserva.css";

interface DatosFormulario {
  fullName: string;
  email: string;
  phone: string;
  occasion: string;
  specialRequest: string;
}

interface FormularioDetallesReservaProps {
  datosIniciales?: DatosFormulario;
  onProceed: (datosFormulario: DatosFormulario) => void;
}

export default function FormularioDetallesReserva({
  datosIniciales,
  onProceed,
}: FormularioDetallesReservaProps) {
  const [fullName, setFullName] = useState(datosIniciales?.fullName || "");
  const [email, setEmail] = useState(datosIniciales?.email || "");
  const [phone, setPhone] = useState(datosIniciales?.phone || "");
  const [occasion, setOccasion] = useState(datosIniciales?.occasion || "");
  const [abiertoOccasion, setAbiertoOccasion] = useState(false);
  const [specialRequest, setSpecialRequest] = useState(datosIniciales?.specialRequest || "");
  const [aceptoTerminos, setAceptoTerminos] = useState(Boolean(datosIniciales));

  const opcionesOccasion = ["Birthday", "Anniversary", "Business Dinner", "Date Night"];

  useEffect(() => {
    if (datosIniciales) {
      setFullName(datosIniciales.fullName);
      setEmail(datosIniciales.email);
      setPhone(datosIniciales.phone);
      setOccasion(datosIniciales.occasion);
      setSpecialRequest(datosIniciales.specialRequest);
      setAceptoTerminos(true);
    } else {
      setFullName("");
      setEmail("");
      setPhone("");
      setOccasion("");
      setSpecialRequest("");
      setAceptoTerminos(false);
    }
    setAbiertoOccasion(false);
  }, [datosIniciales]);

  const handleContinuar = () => {
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      alert("Por favor completa Full Name, Email Address y Phone Number.");
      return;
    }
    if (!aceptoTerminos) {
      alert("Por favor acepta los Terms of Use y Privacy Policy.");
      return;
    }
    onProceed({
      fullName,
      email,
      phone,
      occasion: occasion || "Birthday",
      specialRequest,
    });
  };

  return (
    <form
      className="molecula-form-detalles-reserva"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="form-detalles-titulo">Dinner Details</h2>

      <CampoEntrada
        label="Full Name"
        placeholder="Enter your Full Name"
        value={fullName}
        onChange={setFullName}
      />

      <CampoEntrada
        label="Email Address"
        placeholder="Enter your Email Address"
        value={email}
        onChange={setEmail}
        tipo="email"
      />

      <div className="detalles-campo-grupo">
        <label className="detalles-campo-label">Phone Number</label>
        <div className="campo-telefono-box">
          <div className="telefono-bandera-grupo">
            <svg width="24" height="16" viewBox="0 0 24 16" style={{ borderRadius: "2px" }}>
              <rect width="8" height="16" x="0" fill="#008751" />
              <rect width="8" height="16" x="8" fill="#ffffff" />
              <rect width="8" height="16" x="16" fill="#008751" />
            </svg>
            <img src="/flecha_abajo.svg" alt="" style={{ width: "10px", height: "10px" }} />
          </div>
          <input
            type="tel"
            autoComplete="new-password"
            className="telefono-input"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="detalles-campo-grupo">
        <label className="detalles-campo-label">Select an Occasion (Optional)</label>
        <div className="select-occasion-box">
          <button
            type="button"
            className="btn-occasion-moderno"
            onClick={() => setAbiertoOccasion(!abiertoOccasion)}
          >
            <span style={{ color: occasion ? "#111827" : "#9ca3af" }}>
              {occasion || "Select Occasion"}
            </span>
            <img
              src="/flecha_abajo.svg"
              alt=""
              style={{
                width: "12px",
                height: "12px",
                transform: abiertoOccasion ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>

          {abiertoOccasion && (
            <div className="lista-occasion-flotante">
              {opcionesOccasion.map((op) => (
                <button
                  key={op}
                  type="button"
                  className={`item-occasion-opcion ${occasion === op ? "activa" : ""}`}
                  onClick={() => {
                    setOccasion(op);
                    setAbiertoOccasion(false);
                  }}
                >
                  {op}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <CampoEntrada
        label="Add a Special Request (Optional)"
        placeholder="Enter your special request"
        value={specialRequest}
        onChange={setSpecialRequest}
        tipo="textarea"
      />

      <div className="terminos-fila">
        <input
          type="checkbox"
          className="terminos-check"
          checked={aceptoTerminos}
          onChange={(e) => setAceptoTerminos(e.target.checked)}
        />
        <p className="terminos-texto">
          By clicking &ldquo;Reserve Now&rdquo; you agree to the{" "}
          <span className="terminos-link">Terms of Use</span> and{" "}
          <span className="terminos-link">Privacy Policy</span>.
        </p>
      </div>

      <BotonPrincipal texto="Proceed" onClick={handleContinuar} />
    </form>
  );
}