import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import zlib from "zlib";

const src = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const zip = path.join(import.meta.dirname, "files", "archive.gz");

const compress = async () => {
  const srcStream = createReadStream(src);
  const zipStream = createWriteStream(zip);
  const gzip = zlib.createGzip();

  srcStream.pipe(gzip).pipe(zipStream);
};

await compress();
