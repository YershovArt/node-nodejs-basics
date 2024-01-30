import fs from 'fs/promises';
// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
const read = async () => {
    // Write your code here 
    const fileRead = './files/fileToRead.txt';
    try {
        await fs.stat(fileRead);
        //  { encoding: 'utf-8' } if not will return buffer 
        const fileData = await fs.readFile(fileRead, { encoding: 'utf-8' });
        console.log(fileData);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();