import fs from 'node:fs/promises';
import path from 'path'
// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
const copy = async () => {
    // Write your code here
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //    experimental
    // const source = './files';
    // const destination = 'files_copy';
    // try {
    //     await fs.cp('./files/', './files_copy/', { recursive: true, force: false, errorOnExist: true });
    //     console.log('Copied succsesfully');
    // } catch {
    //     throw new Error("FS operation failed");
    // }
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // first try

    // try {
    //     await fs.stat(source);

    // } catch (error) {
    //     if (error.syscall === 'access') {
    //         await fs.cp(source, destination, { recursive: true });
    //         console.log('Folder copied successfully');
    //     } else if (error.message === 'EXIST') {
    //         throw new Error('FS operation failed, destination folder already directory exist');
    //     } else {
    //         throw new Error('FS operation failed, source folder doesn`t exist');
    //     }
    // }
};

await copy();
