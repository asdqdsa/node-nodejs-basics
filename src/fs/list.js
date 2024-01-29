import fsPromises from 'fs/promises';
import path from 'path';

const dir = path.join(import.meta.dirname, 'files');

const list = async () => {
  // Write your code here
  try {
    const fileNames = await fsPromises.readdir(dir);
    console.log(fileNames);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
