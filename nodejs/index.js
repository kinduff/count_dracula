import crypto from 'crypto';
import { createServer } from 'http';
import { createClient } from "redis";

(async () => {
  'use strict';

  const PORT = process.env.PORT || 3000;

  const redisClient = createClient({ url: process.env.REDIS_URL });
  await redisClient.connect();

  async function requestResponseHandler(req, res) {
    const hash = crypto.createHash('sha256').update(req.url).digest('hex');
    const value = await redisClient.incr(hash);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ req: req.url, hash: hash, total: value }));
  }

  const httpServer = createServer(requestResponseHandler);
  httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})();


