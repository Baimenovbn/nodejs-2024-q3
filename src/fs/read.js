import { readFile } from 'fs/promises';
import path from 'path';
import { FsOperationFailedError } from '../utils/index.js';

const fileToRead = path.join(import.meta.dirname, './files/fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await readFile(fileToRead);
    console.log(fileContent.toString());
  } catch {
    throw new FsOperationFailedError();
  }
};

await read();
