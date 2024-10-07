import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib'
import path from 'path';

const src = path.join(import.meta.dirname, './files/fileToCompress.txt');
const dest = path.join(import.meta.dirname, './files/archive.gz');

const compress = async () => {
  const input = createReadStream(src);
  const gzip = zlib.createGzip();

  input.pipe(gzip).pipe(createWriteStream(dest));
};

await compress();
