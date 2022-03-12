const path = require('path');
const fs = require('fs');
const {
  readSecretFile,
  promisifiedReadSecretFile,
} = require('./promisification');
const { expect } = require('@jest/globals');

const FILE_PATH = path.join(__dirname, '../challenges/secret-message.txt');

jest.spyOn(fs, 'readFile');
fs.readFile.mockImplementation((_filePath, _encoding, cb) => {
  cb(null, 'Test file contents!');
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('readSecretFile', () => {
  test('reads the super-secret-message file', (done) => {
    readSecretFile((_, contents) => {
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      expect(fs.readFile.mock.calls[0]).toContain(FILE_PATH);
      expect(contents).toBe('Test file contents!');
      done();
    });
  });
});

describe('promisifiedReadSecretFile', () => {
  it('returns a promise', () => {
    expect(promisifiedReadSecretFile()).toBeInstanceOf(Promise);
  });
  it('promise fulfils with file contents when reading file is successful', () => {
    return promisifiedReadSecretFile().then((contents) => {
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      expect(fs.readFile.mock.calls[0]).toContain(FILE_PATH);
      expect(contents).toBe('Test file contents!');
    });
  });

  it('promise rejects if an error occurs when reading the file', () => {
    fs.readFile.mockImplementation((_filePath, _encoding, cb) => {
      cb(new Error('Could not find the file!'));
    });
    return promisifiedReadSecretFile().catch((err) => {
      expect(fs.readFile).toHaveBeenCalledTimes(1);
      expect(fs.readFile.mock.calls[0]).toContain(FILE_PATH);
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Could not find the file!');
    });
  });
});
