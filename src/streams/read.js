// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import { createReadStream } from 'fs';
import { pipeline as pipelinePromise } from 'stream/promises'
const read = async () => {
    // Write your code here 
    try {
        await pipelinePromise(
            createReadStream('./files/fileToRead.txt'),
            process.stdout
        )
    } catch (error) {
        console.log("FAil", error);
    }
};

await read();