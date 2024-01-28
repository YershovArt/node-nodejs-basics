import fs from 'fs';

const create = async () => {
    // Write your code here 
    const path = './files/';
    const file = 'fresh.txt';
    const content = 'I am fresh and young';
    try {
        if (fs.existsSync(`${path}${file}`)) throw new Error(`FS operation failed`);
        fs.writeFileSync(`${path}${file}`, content);
        console.log(`${file} created successfully, ${file} content is \`${content}\``);
    } catch (error) {
        console.log(error.message);
    }

};
await create();
