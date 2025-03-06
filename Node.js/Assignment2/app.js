const fileManager=require('./filemanager');


const fileName='example.txt';

(async()=>{
    await fileManager.createFile(fileName,"Hello this is test file");
    await fileManager.readFile(fileName);
    await fileManager.appendFile(fileName,"\nAppending additional content");
    await fileManager.readFile(fileName);
    await fileManager.appendFile(fileName,"\nAppending additional content");
    await fileManager.readFile(fileName);
    await fileManager.deleteFile(fileName);
})();


console.log(`Current file: ${__filename}`);

console.log(`Directory: ${__dirname}`);

console.log(`Node,js version: ${process.version}`);

console.log(`OS Platform: ${process.Platform}`);

console.log(`Process ID : ${process.pid}`);

