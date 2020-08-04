console.log("Hello");
let a: number = 56;
a = 45;

let obj={
    foo: "hello"
}

console.log(obj.foo);

let arr:number[]=[4,5];
let arr2=[6,7];
arr[1]=78;
console.log(arr[1]);

function squareOf(n:number){
    return n*n;
}

squareOf(4);
squareOf(5);

let aa=56
let b:number=78;
let c:any=89;
c="Hello";

console.log(c);

let d: unknown=30;
let e=d===123;

let f=true;
let g:boolean=false;
g=true;
let h:true=true;
let i:20=20;

let myObj={
    name:"Hello"
}
console.log(myObj);

let user:{name:string,age:number};
user={
    name:"Hello",
    age: 56
}

let obj2:{firstname:string,email:string}={
    firstname:"hello",
    email:"hello@mail.com"
}