function GET(req, res, url, payload) {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.json({ message: `Path: ${url.pathname}. Your IP: ${ip}. Your port: ${port}.` });
}

function OPTIONS(req, res, url, payload) {
  res.json({ message: 'Path / OPTIONS request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, OPTIONS, POST };