
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirm.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirm) {
      alert("El password y la confirmación deben ser iguales");
      return;
    }

    alert("Registro exitoso");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: 650 }}>
      <h2 className="mb-4">Register</h2>
      <form onSubmit={onSubmit} className="border rounded p-4 bg-white shadow-sm">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="prueba@prueba.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Registrarme</button>
      </form>
    </div>
  );
}
