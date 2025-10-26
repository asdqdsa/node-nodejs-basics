import { createWriteStream } from "node:fs";
import path from "path";

const src = path.join(import.meta.dirname, "files", "fileToWrite.txt");

const write = async () => {
  process.stdin.on("data", (input) => {
    const writeStream = createWriteStream(src, { flags: "a" });
    writeStream.write(input);
    writeStream.end();
  });
};

await write();
