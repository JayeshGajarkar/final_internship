const arr=[0,1,0,3,1];

let newarr=[];
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        count++;
    }else{
        newarr.push(arr[i]);
    }
}

for(let j=0;j<count;j++){
    newarr.push(0);
}

console.log(newarr);
console.log(arr);