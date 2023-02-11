import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  res.write('Done Success');
  res.end();
}).listen(process.env.PORT);
