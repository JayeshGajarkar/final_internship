//document.getElementById("demo").innerHTML="Hello javascript!";


function red(){
    document.body.style.backgroundColor = "red";
}

function blue(){
    document.body.style.backgroundColor = "blue";
}

function green(){
    document.body.style.backgroundColor = "green";
}

function yellow(){
    document.body.style.backgroundColor = "yellow";
}

function area(){
    var radius=prompt("Enter a radius:")
    document.getElementById("area").innerHTML=Math.PI*(Math.pow(radius,2));
}


function addnum(){
    let num1 =parseInt(document.getElementById('num1').value);
    let num2 =parseInt(document.getElementById('num2').value);
    let result=num1+num2;
    document.getElementById('result').innerHTML=result;

}

function check(){
    let num =parseInt(document.getElementById('num').value);
    if(num%2==0){
        document.getElementById('ans').innerHTML="Even";
    }else{
        document.getElementById('ans').innerHTML="odd";
    }
}

function display(){
    let name=document.getElementById('name').value;
    let age=parseInt(document.getElementById('age').value);
    let text="Your name is "+name+" and age is "+age;
    alert(text);
}

function validate() {
    let date = parseInt(document.getElementById('date').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    let isValid = true;
    if (month < 1 || month > 12 || year<0) {
        isValid = false;
    } else {
        let maxDays = [31, (year % 4 == 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (date < 1 || date > maxDays[month - 1]) {
            isValid = false;
        }
    }

    if(isValid){
        document.getElementById('isvalid').innerHTML = "Valid date";
    }else{
        document.getElementById('isvalid').innerHTML = "invalid date";
    }
}



function myCounter(){
    let count=0;

    return function(){
        count++;
        return count;
    }
}

//let countValue=myCounter();
//console.log(countValue());


function print_primenumber(num){
    let prime=[];
    for(let i=3;i<=num;i++){
        let f=true;
        
        if(i==2){
            console.log(2);
        }

        for(let j=2;j<i;j++){
            if(i%j==0){
                f=false;
                break;
            }
        }
        
        if(f){
            prime.push(i);
        }
    }

    return prime;
}


function fact(num){
    let result=1;
    while(num>=1){
        result*=num;
        num--;
    }
    return result;
}

console.log(print_primenumber(100).toString());
console.log(fact(5));

let n=new Date().getDay();
let day="";

switch(n){
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    case 0:
        day="sunday";
        break;
    default:
        day="Wrong input";
}

console.log(day);