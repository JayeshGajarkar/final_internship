const arr=[];


function add(){
    let ele=document.getElementById("ele").value;
    arr.push(ele);
    let text=arr.toString();
    document.getElementById('display').innerHTML=text;
}

function remove(){
    arr.pop();
    let text=arr.toString();
    if(arr.length==0){
        text="No item in the List";
    }
    document.getElementById('display').innerHTML=text;
}

function clearList(){
    if(arr.length==0){
        let text="No item in the List";
        document.getElementById('display').innerHTML=text;
    }else{
        while(arr.length!=0){
            arr.pop();
        }
        let text="No item in the List";
        document.getElementById('display').innerHTML=text;
    }
}
