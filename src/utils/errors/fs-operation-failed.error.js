export class FsOperationFailedError extends Error {
  constructor() {
    super('FS operation failed');
  }
}
