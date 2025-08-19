import { cookies } from 'next/headers';
import { API_URL } from './api';

export type Profile = {
  id: string;
  email: string;
  name?: string;
};

export async function getCurrentUser(): Promise<Profile | null> {
  const token = (await cookies()).get('token')?.value;
  if (!token) return null;

  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });

  if (!res.ok) return null;
  return res.json();
}
