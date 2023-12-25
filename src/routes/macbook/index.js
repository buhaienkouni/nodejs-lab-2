function GET(req, res, url, payload) {
  res.json({ message: 'Path /macbook GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };