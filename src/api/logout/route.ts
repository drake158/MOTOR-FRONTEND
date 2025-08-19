import { NextResponse } from 'next/server';

export async function POST() {
  const rsp = NextResponse.json({ ok: true });
  rsp.cookies.delete('token');
  return rsp;
}
