import fs from 'node:fs/promises';
import path from 'path';

import { FsOperationFailedError } from '../utils/index.js';

const fileToRename = path.join(import.meta.dirname, './files/wrongFilename.txt');
const properFilename = path.join(import.meta.dirname, './files/properFilename.md');

const rename = async () => {
  let s;
  try {
    s = await fs.stat(properFilename);
  } catch {}
  if (s?.size) {
    throw new FsOperationFailedError();
  }

  try {
    await fs.rename(fileToRename, properFilename);
  } catch {
    throw new FsOperationFailedError();
  }

};

await rename();
