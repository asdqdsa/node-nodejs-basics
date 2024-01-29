import fsPromises from 'fs/promises';
import path from 'path';

const oldPath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(import.meta.dirname, 'files', 'properFilename.md');

const rename = async () => {
  // Write your code here
  try {
    await fsPromises.rename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
