import { writeFile } from 'node:fs/promises';
import path from 'path';

import { FsOperationFailedError } from '../utils/index.js';

const content = 'I am fresh and young';

const create = async () => {
    try {
      await writeFile(path.join(import.meta.dirname, `./files/fresh.txt`), content, { flag: 'ax'});
    } catch (e) {
      throw new FsOperationFailedError()
    }
};

await create();
