export default function Dashboard(){
  const lineas = [
    { nombre: "Desarrollo de Software", desc: "Diseño y mantenimiento de aplicaciones." },
    { nombre: "Inteligencia Artificial", desc: "Machine Learning, Deep Learning y análisis de datos." },
    { nombre: "Redes y Seguridad", desc: "Administración de redes y ciberseguridad." },
    { nombre: "Bases de Datos", desc: "Gestión y análisis de datos a gran escala." }
  ]

  return (
    <div className="row">
      {lineas.map((l, i) => (
        <div className="col-md-3 mb-4" key={i}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{l.nombre}</h5>
              <p className="card-text">{l.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
