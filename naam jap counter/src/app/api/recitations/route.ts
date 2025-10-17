// API route for handling recitations data
import { NextResponse } from 'next/server';

// Mock data
const mockRecitations = [
  { id: '1', userId: '1', godName: 'Ram', count: 108, date: new Date() },
  { id: '2', userId: '1', godName: 'Krishna', count: 54, date: new Date() },
  { id: '3', userId: '1', godName: 'Shiva', count: 76, date: new Date() },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  // Filter by userId if provided
  const recitations = userId 
    ? mockRecitations.filter(r => r.userId === userId)
    : mockRecitations;
  
  return NextResponse.json({ recitations });
}

export async function POST(request: Request) {
  const data = await request.json();
  
  // In a real app, you would save this to a database
  const newRecitation = {
    id: String(mockRecitations.length + 1),
    userId: data.userId,
    godName: data.godName,
    count: data.count,
    date: new Date()
  };
  
  mockRecitations.push(newRecitation);
  
  return NextResponse.json({ 
    success: true, 
    recitation: newRecitation 
  });
}