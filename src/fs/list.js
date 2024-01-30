import fs from 'fs/promises';
// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
const list = async () => {
    // Write your code here 
    try {
        await fs.access('./files');
        const arrayFilenames = await fs.readdir('./files/');
        console.log(arrayFilenames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();