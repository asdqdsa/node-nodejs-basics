import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  // Write your code here
  try {
    const fileContent = await fsPromises.readFile(filePath, {
      encoding: 'utf-8',
    });
    console.log(fileContent);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
