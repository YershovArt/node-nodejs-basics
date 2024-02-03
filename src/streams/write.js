// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
const write = async () => {
    // Write your code here
    try {
        await pipeline(
            process.stdin,
            createWriteStream('./files/fileToWrite.txt')
        )
    } catch (error) {
        console.log('failed', error);
    }
};

await write();