// api/register.js
export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { username, password } = req.body || {};
  if(!username || !password) return res.status(400).json({ message: 'username & password required' });

  // Simple in-memory store (ephemeral)
  if(!global._users) global._users = [];
  const users = global._users;
  if(users.find(u=>u.username === username)) return res.status(400).json({ message: 'Username sudah terpakai' });

  const user = { username, password, saldo: 50000 };
  users.push(user);
  return res.json({ message: 'Registrasi berhasil', username: user.username });
}
