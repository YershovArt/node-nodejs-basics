import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline as pipelinePromise } from 'stream/promises';

const decompress = async () => {
    // Write your code here 
    const gzip = createGunzip();
    const source = createReadStream('./files/archive.gz');
    const dest = createWriteStream('./files/fileToCompress.txt');
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

await decompress();