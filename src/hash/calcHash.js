import { createReadStream } from 'node:fs';
import path from 'path';
import crypto from 'crypto';

const src = path.join(
  import.meta.dirname,
  'files',
  'fileToCalculateHashFor.txt'
);

const calculateHash = async () => {
  // Write your code here
  const stream = createReadStream(src);
  stream.on('data', (chunk) => {
    const myHash = crypto.createHash('sha256').update(chunk).digest('hex');
    console.log(myHash);
  });
};

await calculateHash();
