import React from 'react'

export default function Dashboard() {
  const lineas = [
    { nombre: "Desarrollo de Software", desc: "Diseño, implementación y mantenimiento de aplicaciones." },
    { nombre: "Inteligencia Artificial", desc: "Machine Learning, Deep Learning y procesamiento de datos." },
    { nombre: "Redes y Seguridad", desc: "Administración de redes, ciberseguridad y protocolos." },
    { nombre: "Bases de Datos", desc: "Modelado, gestión y análisis de datos a gran escala." },
    { nombre: "Sistemas Distribuidos", desc: "Computación en la nube, arquitecturas escalables." },
    { nombre: "Gestión de Proyectos", desc: "Metodologías ágiles, planificación y control de proyectos." }
  ]

  return (
    <div className="row">
      {lineas.map((linea, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{linea.nombre}</h5>
              <p className="card-text">{linea.desc}</p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
