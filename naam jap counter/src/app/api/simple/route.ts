export async function GET() {
  return Response.json({ 
    status: 'ok', 
    message: 'Simple API route is working'
  });
}