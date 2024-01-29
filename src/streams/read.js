import { createReadStream } from 'node:fs';
import path from 'path';

const src = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  // Write your code here
  const stream = createReadStream(src);
  stream.on('data', (chunk) => process.stdout.write(chunk + '\n'));
};

await read();
