import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import zlib from 'zlib';

const zip = path.join(import.meta.dirname, 'files', 'archive.gz');
const target = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  // Write your code here
  const zipStream = createReadStream(zip);
  const targetStream = createWriteStream(target);
  const unzip = zlib.createUnzip();

  zipStream.pipe(unzip).pipe(targetStream);
};

await decompress();
