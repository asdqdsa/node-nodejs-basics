import fsPromises from 'fs/promises';
import path from 'path';

const src = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  // Write your code here
  try {
    await fsPromises.unlink(src);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
