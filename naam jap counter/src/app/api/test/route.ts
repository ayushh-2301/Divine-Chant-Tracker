export async function GET() {
  return Response.json({ 
    status: 'ok', 
    message: 'Test API route is working'
  });
}