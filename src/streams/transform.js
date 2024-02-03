// transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform, pipeline } from 'stream';
const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
    // Write your code here 
    const transform = new Transform({
        transform(chunk, enc, cb) {
            const strinf = chunk.toString().trim();

            const reverseChunk = strinf.split('').reverse().join('');

            cb(null, reverseChunk + '\n');
        }
    });
    try {
        pipeline(
            readable,
            transform,
            writable,
            err => {
                console.log(`Error ${err}`);
            }
        );
    } catch (error) {
        console.log('tranform failed', error);
    }

};

await transform();