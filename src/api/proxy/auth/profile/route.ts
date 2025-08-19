import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_URL } from '@/lib/api';

export async function GET(req: NextRequest, ctx: { params: { path: string[] }}) {
  return proxy(req, ctx.params.path);
}
export async function POST(req: NextRequest, ctx: { params: { path: string[] }}) {
  return proxy(req, ctx.params.path);
}
export async function PUT(req: NextRequest, ctx: { params: { path: string[] }}) {
  return proxy(req, ctx.params.path);
}
export async function PATCH(req: NextRequest, ctx: { params: { path: string[] }}) {
  return proxy(req, ctx.params.path);
}
export async function DELETE(req: NextRequest, ctx: { params: { path: string[] }}) {
  return proxy(req, ctx.params.path);
}

async function proxy(req: NextRequest, segments: string[]) {
  const token = (await cookies()).get('token')?.value;
  const url = `${API_URL}/${segments.join('/')}${req.nextUrl.search}`;
  const body = ['GET', 'HEAD'].includes(req.method) ? undefined : await req.text();

  const res = await fetch(url, {
    method: req.method,
    headers: {
      'Content-Type': req.headers.get('content-type') ?? 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body,
    credentials: 'include',
    cache: 'no-store',
  });

  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { 'Content-Type': res.headers.get('content-type') ?? 'application/json' },
  });
}
