import fs from 'fs/promises';

// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

const remove = async () => {
    const deleteFile = './files/fileToRemove.txt'
    // Write your code here 
    try {
        await fs.unlink(deleteFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();