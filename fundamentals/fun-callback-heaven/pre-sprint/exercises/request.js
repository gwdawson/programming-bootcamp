const https = require('https');

function request(url, callBack) {
  const [wholeUrl, hostname, path] = url.match(/https:\/\/([a-z\.]*)(.*)/);
  console.log(hostname, ' hostname');
  console.log('path :', path);
  https
    .request(
      {
        method: 'GET',
        hostname,
        path,
        headers: { Accept: 'application/json' }
      },
      res => {
        let body = '';
        res.on('data', chunk => (body += chunk));
        res.on('end', () => {
          callBack(null, JSON.parse(body));
        });
      }
    )
    .end();
}

module.exports = request;
