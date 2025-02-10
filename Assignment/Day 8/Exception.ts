function divide(a:number,b:number):number{
    if(b==0){
        throw new Error("Can't divide zero");
    }
    return a/b;
}

try{
    console.log(divide(10,0));
}catch(error){
    console.log((error as Error).message);
}