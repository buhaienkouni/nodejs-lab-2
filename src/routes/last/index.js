function GET(req, res, url, payload) {
  res.json({ message: 'Path /last GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };