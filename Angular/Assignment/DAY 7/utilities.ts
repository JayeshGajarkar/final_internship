//partial utility

interface User {
    id:number,
    name:string,
    email:String
}


function updateUser(user:User,update:Partial<User>):User {
    return {...user,...update};
}

const user:User={id:1,name:"jayesh",email:"jayeshgajarkar@gmail.com"};
const update:Partial<User>={name:"dnyanadev",email:"jayeshgajarkar2002@gmail.com"};
console.log(user);
const user2=updateUser(user,update);
console.log(user2);

//pick utility

type UserPreview= Pick<User,"name"|"email">;

const userPreview:UserPreview = {name:"Jayesh",email:"jayeshgajarkar@gmail.com"};

console.log(userPreview);

//Omit utility

type UserWithoutEmail=Omit<User,'email'>;
const userWithoutEmail:UserWithoutEmail={id:2,name:'Kartik'};
console.log(userWithoutEmail);




