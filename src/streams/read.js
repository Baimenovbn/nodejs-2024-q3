import fs from 'fs';
import path from 'path';

const dest = path.join(import.meta.dirname, './files/fileToRead.txt')

const read = async () => {
  const stream = fs.createReadStream(dest);
  stream.on('data', c => {
    console.log(c.toString());
  })
};

await read();
