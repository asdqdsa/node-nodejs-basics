import fsPromises from "fs/promises";
import path from "path";

const src = path.join(import.meta.dirname, "files");
const dest = path.join(import.meta.dirname, "files_copy");

const copy = async () => {
  try {
    console.log(src, dest);
    await fsPromises.cp(src, dest, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
