// keepAlive.js
const https = require('https');

const url = 'https://junkcycle-ca.onrender.com'; // render backend URL

function ping() {
  https.get(url, (res) => {
    console.log(`[${new Date().toISOString()}] Pinged ${url} - Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toISOString()}] Error pinging ${url}:`, err.message);
  });
}

ping();

// Set interval to 40 minutes
setInterval(ping, 14 * 60 * 1000);