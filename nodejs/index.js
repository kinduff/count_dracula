import { createServer } from 'http';
import { createClient } from "redis";

(async () => {
  'use strict';

  const PORT = process.env.PORT || 3000;

  const redisClient = createClient({ url: process.env.REDIS_URL });
  await redisClient.connect();

  function generateHashCode(input) {
    var hash = 0, i, chr;
    for (i = 0; i < input.length; i++) {
      chr   = input.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
  }

  async function requestResponseHandler(req, res) {
    const hash = generateHashCode(req.url);
    const value = await redisClient.incr(hash);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ total: value }));
  }

  const httpServer = createServer(requestResponseHandler);
  httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})();
