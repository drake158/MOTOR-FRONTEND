'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutClient({ className = '' }: { className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null); // null: sin confirmar

  async function onLogout() {
    setLoading(true);
    try {
      // 1) Borramos cookie server-side
      await fetch('/api/logout', { method: 'POST' });

      // 2) Verificamos: un endpoint protegido debe fallar
      const check = await fetch('/api/proxy/auth/profile', { cache: 'no-store' });

      if (check.status === 401 || check.status === 403) {
        setOk(true);                 // confirmado
        router.push('/login');       // volver al login
        router.refresh();            // limpia caché/SSR
      } else {
        // Si responde 200, algo falló (sigue logueado)
        setOk(false);
      }
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={onLogout}
      className={`px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition ${className}`}
      aria-label="Cerrar sesión"
    >
      {loading ? 'Saliendo…' : ok === true ? 'Sesión cerrada' : 'Logout'}
    </button>
  );
}


