import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const pathToWorker = path.join(import.meta.dirname, './worker.js');

const performCalculations = async () => {
  const numOfCPUs = os.cpus().length;
  const startNum = 10;
  const result = [];

  for (let i = 0; i < numOfCPUs; i++) {
    const worker = new Worker(pathToWorker, { workerData: i + startNum });
    result[i] = new Promise((res) => {
      worker.on('message', (data) => {
        res({ data, status: 'resolved' });
      });
      worker.on('error', () => {
        res({ data: null, status: 'rejected' });
      });
    })
  }

  console.log(await Promise.all(result));
};

await performCalculations();
