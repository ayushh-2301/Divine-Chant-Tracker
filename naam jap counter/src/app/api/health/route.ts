export async function GET() {
  return Response.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Divine Chant Tracker API is running successfully'
  });
}