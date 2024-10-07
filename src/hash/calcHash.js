import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const src = path.join(import.meta.dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  createReadStream(src).pipe(createHash('sha256').setEncoding('hex')).pipe(process.stdout);
};

await calculateHash();
