import fs from 'node:fs/promises';

const create = async () => {
    // Write your code here 
    const pathFile = './files/fresh.txt';
    const content = 'I am fresh and young';
    try {
        await fs.stat(pathFile);
        throw new Error;
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(pathFile, content);
            console.log('file was created');
        } else {
            throw new Error('FS operation failed');
        }

    }
};
await create();
