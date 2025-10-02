export default function Register(){
  return (
    <div className="card p-4">
      <h3>Registro</h3>
      <input type="text" placeholder="Nombre" className="form-control mb-2"/>
      <input type="email" placeholder="Correo" className="form-control mb-2"/>
      <input type="password" placeholder="Contraseña" className="form-control mb-2"/>
      <button className="btn btn-success">Registrarse</button>
    </div>
  )
}
