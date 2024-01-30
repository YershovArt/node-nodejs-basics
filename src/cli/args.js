// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
    // Write your code here
    // process.argv[0] 'C:\\nvm\\nvm\\v20.11.0\\node.exe',
    // process.argv[1] ''D:\\Backend\\RsSchool\\1_NodejsBasics\\node-nodejs-basics\\src\\cli\\args.js',',
    let i = 2
    let out = ''
    while (i < process.argv.length) {
        out += `${process.argv[i].slice(2)} is ${process.argv[i + 1]}, `;
        i += 2;
    }
    console.log(out);
};

parseArgs();