import fs from 'fs';
import { createHash } from 'crypto';
import { error } from 'console';

const calculateHash = async () => {
    // Write your code here
    const hash = createHash('sha256');
    const input = fs.createReadStream('./files/fileToCalculateHashFor.txt');

    input.on('data', (chunk) => {
        hash.update(chunk);
    });

    input.on('end', () => {
        console.log(hash.digest('hex'));
    });

    input.on('error', () => {
        console.log('Error', error);
    });
    
};

await calculateHash();