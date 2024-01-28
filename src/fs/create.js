import fsPromises from 'fs/promises';
import path from 'path';

const fullPath = path.join(import.meta.dirname, 'files', 'fresh.txt');
const DATA = 'I am fresh and young';

const create = async () => {
  // Write your code here
  try {
    await fsPromises.writeFile(fullPath, DATA, {
      encoding: 'utf-8',
      flag: 'wx',
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
