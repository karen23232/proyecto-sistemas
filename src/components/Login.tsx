export default function Login(){
  return (
    <div className="card p-4">
      <h3>Iniciar Sesión</h3>
      <input type="email" placeholder="Correo" className="form-control mb-2"/>
      <input type="password" placeholder="Contraseña" className="form-control mb-2"/>
      <button className="btn btn-primary">Ingresar</button>
    </div>
  )
}
