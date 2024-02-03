import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline as pipelinePromise } from 'stream/promises';
// compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API


const compress = async () => {
    // Write your code here 
    const gzip = createGzip();
    const source = createReadStream('./files/fileToCompress.txt');
    const dest = createWriteStream('./files/archive.gz');
    try {
        await pipelinePromise(
            source,
            gzip,
            dest
        )
    } catch (error) {
        console.log('Compression failed', error);
    }
};

await compress();