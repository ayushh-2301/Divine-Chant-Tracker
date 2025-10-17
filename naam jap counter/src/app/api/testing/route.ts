export async function GET() {
  return Response.json({ 
    status: 'success', 
    message: 'API routing is working correctly!',
    timestamp: new Date().toISOString()
  });
}