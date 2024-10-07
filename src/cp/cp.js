import { fork } from 'child_process';
import { join } from 'path';

const childProcessPath = join(import.meta.dirname, './files/script.js');

const spawnChildProcess = async (args) => {
  const cp = fork(childProcessPath, args, { silent: true });
  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
