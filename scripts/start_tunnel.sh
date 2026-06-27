#!/bin/bash

echo "Starting NodeAuth backend..."
node backend/dist/docker/server.js &
NODE_PID=$!

if [ -n "$CLOUDFLARE_TUNNEL_TOKEN" ]; then
  echo "CLOUDFLARE_TUNNEL_TOKEN provided. Starting cloudflared tunnel..."
  cloudflared tunnel --no-autoupdate run --token ${CLOUDFLARE_TUNNEL_TOKEN} &
  CLOUDFLARED_PID=$!
else
  echo "No CLOUDFLARE_TUNNEL_TOKEN provided. Running in standalone mode."
fi

# Wait for the first background process to exit
wait -n

echo "A process exited unexpectedly. Terminating container to trigger restart."
[ -n "$CLOUDFLARED_PID" ] && kill $CLOUDFLARED_PID 2>/dev/null
kill $NODE_PID 2>/dev/null
exit 1
