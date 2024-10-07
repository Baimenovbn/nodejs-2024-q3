import fs from 'fs';
import path from 'path';

const dest = path.join(import.meta.dirname, './files/fileToWrite.txt')

const write = async () => {
  const destStream = fs.createWriteStream(dest);
  process.stdin.pipe(destStream)
};

await write();
