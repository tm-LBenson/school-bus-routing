import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';
const API_KEY = process.env.DATA_API_KEY;
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);
  const todos = await res.json();
  return NextResponse.json(todos);
}

export async function DELETE(request) {
  const { id } = await request.json();
  if (!id) return NextResponse.json({ message: 'Item not found' });
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
  });
  return NextResponse.json({ message: 'OK' });
}
