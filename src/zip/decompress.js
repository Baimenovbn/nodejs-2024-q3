import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const src = path.join(import.meta.dirname, './files/archive.gz');
const dest = path.join(import.meta.dirname, './files/fileToCompress.txt');

const decompress = async () => {
  const input = createReadStream(src);
  const gzip = zlib.createGunzip();

  input.pipe(gzip).pipe(createWriteStream(dest));
};

await decompress();
