function throwError(msg:any):never{
    throw new Error(msg);
}

throwError("Something went worng");

function infiniteLoop():void{
    while(true){
        console.log("runnnig")
    }
}

infiniteLoop();
