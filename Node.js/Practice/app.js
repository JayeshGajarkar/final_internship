const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("what is your name:\n",(name)=>{
    console.log(name);
    rl.close();
})

rl.on('close',()=>{
    console.log("Interface closed");
    process.exit(0);
})