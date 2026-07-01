
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface User {
  username: string;
}

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Verificar el token con el backend
    fetch('/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('No autenticado');
      })
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => router.push('/login'));
  }, [router]);

  if (loading) return <p>Cargando...</p>;

  return <h1>Bienvenido, {user?.username}</h1>;
};

export default Dashboard;