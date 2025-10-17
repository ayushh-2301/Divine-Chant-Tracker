export async function GET() {
  return Response.json({ 
    status: 'ok', 
    message: 'Debug API route is working'
  });
}