import React, { useState } from 'react'

export default function DataForm() {
  const [nombre, setNombre] = useState("")
  const [linea, setLinea] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Registrado: ${nombre} en la línea ${linea}`)
    // Aquí iría POST hacia el backend con fetch/axios
  }

  return (
    <div className="card p-4 shadow">
      <h3 className="mb-3">Inscripción a Línea de Profundización</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Seleccione la línea</label>
          <select className="form-select" value={linea} onChange={(e) => setLinea(e.target.value)} required>
            <option value="">-- Seleccione --</option>
            <option value="Desarrollo de Software">Desarrollo de Software</option>
            <option value="Inteligencia Artificial">Inteligencia Artificial</option>
            <option value="Redes y Seguridad">Redes y Seguridad</option>
            <option value="Bases de Datos">Bases de Datos</option>
            <option value="Sistemas Distribuidos">Sistemas Distribuidos</option>
            <option value="Gestión de Proyectos">Gestión de Proyectos</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Inscribirse</button>
      </form>
    </div>
  )
}
