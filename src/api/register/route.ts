import { NextRequest, NextResponse } from 'next/server';
import { API_URL, JWT_MAX_AGE } from '@/lib/api';

export async function POST(req: NextRequest) {
  const body = await req.json(); // { email, password, name? ... }
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) return NextResponse.json(data, { status: res.status });

  const token: string = data.access_token;
  const rsp = NextResponse.json({ ok: true });

  rsp.cookies.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: JWT_MAX_AGE,
  });

  return rsp;
}
