const https = require('https');

const projects = ['sensorium', 'hinjewadi', 'hadapsar-pune', 'bavdhan', 'vanaha'];
const checkUrl = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    resolve({ url, status: res.statusCode });
  }).on('error', () => resolve({ url, status: 500 }));
});

async function run() {
  for (const p of projects) {
    for (let i = 1; i <= 3; i++) {
        const url = `https://www.joyvillehomes.com/files/assets/jpegs/all_projects/${p}/gallery/${i}.webp`;
        const res = await checkUrl(url);
        if (res.status === 200) console.log(url);
    }
  }
}
run();
