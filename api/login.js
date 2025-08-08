// api/login.js
export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { username, password } = req.body || {};
  if(!username || !password) return res.status(400).json({ message: 'username & password required' });

  const users = global._users || [];
  const user = users.find(u => u.username === username && u.password === password);
  if(!user) return res.status(401).json({ message: 'Username atau password salah' });

  return res.json({ message: 'Login berhasil', username: user.username, saldo: user.saldo });
    }
