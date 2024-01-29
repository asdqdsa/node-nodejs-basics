import { Transform } from 'stream';

const createReverseString = () => {
  return new Transform({
    transform(chunk, _, callback) {
      const reverseString =
        [...chunk.toString()].slice(0, -1).reverse().join('') + '\n';
      callback(null, reverseString);
    },
  });
};

const reverseInput = createReverseString();

const transform = async () => {
  // Write your code here
  process.stdin.pipe(reverseInput).pipe(process.stdout);
};

await transform();
