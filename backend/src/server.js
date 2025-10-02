const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret_demo';


// "DB" en memoria para demo
const users = [];


app.post('/api/register', async (req, res) => {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'Faltan datos' });
if (users.find(u => u.username === username)) return res.status(400).json({ message: 'Usuario ya existe' });
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);
const user = { id: users.length + 1, username, password: hash };
users.push(user);
res.json({ message: 'Registrado' });
});


app.post('/api/login', async (req, res) => {
const { username, password } = req.body;
const user = users.find(u => u.username === username);
if (!user) return res.status(400).json({ message: 'Usuario o contraseña inválidos' });
const ok = await bcrypt.compare(password, user.password);
if (!ok) return res.status(400).json({ message: 'Usuario o contraseña inválidos' });
const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2h' });
res.json({ token });
});


// Endpoint protegido de ejemplo
app.get('/api/profile', (req, res) => {
const auth = req.headers.authorization;
if (!auth) return res.status(401).json({ message: 'No autorizado' });
const token = auth.split(' ')[1];
try {
const payload = jwt.verify(token, JWT_SECRET);
return res.json({ user: { id: payload.id, username: payload.username } });
} catch (err) {
return res.status(401).json({ message: 'Token inválido' });
}
});

// Obtener un dato por ID
app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const entry = dataEntries.find(d => d.id === id);
  if (!entry) return res.status(404).json({ message: 'No encontrado' });
  res.json(entry);
});

// Actualizar un dato (PUT)
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const entry = dataEntries.find(d => d.id === id);
  if (!entry) return res.status(404).json({ message: 'No encontrado' });

  const { nombre, email, descripcion } = req.body;
  entry.nombre = nombre || entry.nombre;
  entry.email = email || entry.email;
  entry.descripcion = descripcion || entry.descripcion;

  res.json({ message: 'Dato actualizado', entry });
});

// Eliminar un dato (DELETE)
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = dataEntries.findIndex(d => d.id === id);
  if (index === -1) return res.status(404).json({ message: 'No encontrado' });

  const deleted = dataEntries.splice(index, 1);
  res.json({ message: 'Dato eliminado', deleted });
});



app.listen(PORT, () => console.log(`Backend en http://localhost:${PORT}`));