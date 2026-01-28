function double(num){
    return num * 2;
}
let arr=[2,3,4,5,6,7]
let doubledArr=arr.map(double);
//console.log(doubledArr);
const tripledarr=arr.map(num => num * 3);
//console.log(tripledarr);

function isOdd(num){
    return num % 2 !== 0;
}
//console.log(isOdd(3)); 
let oddnos = arr.filter(isOdd);
//console.log(oddnos);
const evennos = arr.filter(num => num%2==0)
//console.log(evennos);

let ar = [13,15,20,35,27];
const mulfive = ar.filter(n => n%5==0)
//console.log(mulfive);
ar1 = [2,3,4,5,6];
let sum_ = ar1.reduce((pro,curr) => { //factorial
    return pro * curr;
},1);
//console.log(sum_);

let sum = ar1.reduce((acc, curr) => acc * curr, 1); //factorial
//console.log(sum);

//chaining - map, filter, reduce (make arr as triple, then filter even nos, then sum them)
const triple = ar1.map((n => n*3));
const even = triple.filter(n => n%2==0);
const sum_even = even.reduce((acc,curr) => acc + curr,0);
//console.log(sum_even);

//destructuring the array
let a = [1,2,3,4,5];
const [x,,y,,z] = a; //-skipping elements
//console.log(x,y,z);
const [w,...v] = a; //rest operator (prints the remaining elements in array)
//console.log(v); 
let b = [0,...a,6,7]
//console.log(b); //adding elements in between using rest operator (adding 2 arrays)

const ob1 = { x:3, y:4}
const ob2 = { y:5, z:6}
const ob3 = {...ob1, ...ob2} //merging 2 objects (if same key, then the value of the last object is taken coz it'll override)
//console.log(ob3);


const promise=new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if (success){
            //resolve("Resolved Succesfully")
        }
        else{
            //reject("Rejected")
        }
    },2000)
})
//console.log("Before promise execution");
/*promise.then((result)=>console.log(result))
       .catch(err=>console.log(err))
       .finally(()=>{console.log("Promises completed")})
//console.log("After promise execution");

//fetch API
fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {return response.json()})
      .then((data) => data.map((user)=> {console.log(user.address.city)}))
      .catch(err => console.log(err))
      .finally(() => console.log("Fetch completed"));

//async,await
async function fetchApi(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        //data.map((user)=>{console.log(user.name)})
    }
    catch(err){
        console.log(err)
    }
}
fetchApi();*/

//String Literals
let name="Park Sulen";
let age=30;
//console.log(`I am ${name} and my age is ${age}`);

const mul=(a,b)=>{
    return a*b
}
const square=(n)=>{
    return(n,n)
}
const print=(n)=>{
    let sq=square(n);
    console.log(sq);
}
//print(3);

//event looping
//console.log("first");
//Promise.resolve().then(console.log('From promises'));
setTimeout(()=>{
    //console.log("Inside Timeout");
},2000)
//console.log("last");

