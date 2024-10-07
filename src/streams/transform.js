import { Transform } from 'stream';


class ReverseTransformer extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .split('')
        .reverse()
        .join('')
        .concat('\n')
    );

    callback();
  }
}

const transform = async () => {
  process.stdin.pipe(new ReverseTransformer()).pipe(process.stdout);
};

await transform();
