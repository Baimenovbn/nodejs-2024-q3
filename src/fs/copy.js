import { cp } from 'node:fs/promises';
import path from 'path';
import { FsOperationFailedError } from '../utils/index.js';

const src = path.join(import.meta.dirname, './files');
const dest = path.join(import.meta.dirname, './files_copy');

const copy = async () => {
  try {
    await cp(src, dest, { errorOnExist: true, recursive: true, force: false });
  } catch (e) {
    throw new FsOperationFailedError();
  }

};

await copy();
