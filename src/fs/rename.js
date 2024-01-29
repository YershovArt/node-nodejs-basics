import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { stat } from 'node:fs';
// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
const rename = async () => {
    // Write your code here
    const wrongName = './files/wrongFilename.txt';
    const properName = './files/properFilename.txt';
    await fs.rename(wrongName, properName);
    try {
        await fs.stat(wrongName);
        await fs.access(properName);
        throw new Error('EXIST');
    } catch (error) {
        if (error.syscall === 'access') {
            await fs.rename(wrongName, properName);
            console.log('wrongFilename.txt renamed properFilename.txt');
        } else if (error.message === 'EXIST') {
            throw new Error('FS operation failed, properFilename.txt exist');
        } 
    }

};

await rename();