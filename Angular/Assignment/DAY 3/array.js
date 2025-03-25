const arr=[2,1,3,4,5,6,7,8,9,1];
let mini = Number.MAX_SAFE_INTEGER;
let ssm = Number.MAX_SAFE_INTEGER;

for (let j = 0; j < arr.length; j++) {
    if (arr[j] < mini) {
        ssm = mini;
        mini = arr[j];
    } 
}

console.log(ssm);
console.log(mini);


