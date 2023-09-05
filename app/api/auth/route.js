import { NextResponse } from 'next/server';
import store from '@/app/store';
import { login } from '@/app/store/authSlice';

export async function POST(request) {
  const { email, password } = await request.json();
  store.dispatch(login({ email, password }));
  return NextResponse.json({ success: 'success' });
}
