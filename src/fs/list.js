import { readdir } from 'fs/promises';
import path from 'path';
import { FsOperationFailedError } from '../utils/index.js';

const dest = path.join(import.meta.dirname, './files');

const list = async () => {
  try {
    const files = await readdir(dest);
    files.forEach(n => console.log(n));
  } catch {
    throw new FsOperationFailedError();
  }
};

await list();
