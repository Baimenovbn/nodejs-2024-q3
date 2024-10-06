import { rm } from 'node:fs/promises';
import path from 'path';
import { FsOperationFailedError } from '../utils/index.js';

const fileToRemove = path.join(import.meta.dirname, './files/fileToRemove.txt');

const remove = async () => {
  try {
    await rm(fileToRemove);
  } catch {
    throw new FsOperationFailedError();
  }
};

await remove();
