setTimeout(() => {
  console.log("Done");
}, 1000);

// callback
function task(callback) {
  console.log("Task started");
  setTimeout(() => {
    console.log("Task finished");
    callback();
  }, 1000);
}

task(() => {
  console.log("Callback executed");
});

//call back hell 
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
// promise
const mypromise=new Promise((resolve,reject)=>{ 
    setTimeout(()=>{
        resolve("Data received");
    },1000);
});
mypromise.then(data=>{
    console.log(data);
});

// promise is rejected
const p=new Promise((resolve,reject)=>{
    reject("Something went wrong");
});
p.catch((err=>console.log(err)));

//promise chaining
Promise.resolve(10)
.then(num=>num*10)
.then(num=>num+5)
.then(result=>console.log(result));

//chain async work
function asyncTask(value){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(value*2),1000);
    })
}
asyncTask(2)
.then(res=>asyncTask(res))
.then(res=>asyncTask(res))
.then(final=>console.log(final));

error handinling
Promise.resolve("start")
.then(()=>{throw new Error("No Data")})
.then(()=>console.log("no errors i am running happily"))
.catch(err=> console.log("Caught:"+ err.message));

const c1=new Promise(res=>setTimeout(()=>res("A"),1000));
const c2=new Promise(res=>setTimeout(()=>res("B"),2000));
Promise.all([c1,c2])
.then(res=>console.log(res));
Promise.race([c1,c2])
.then(res=>console.log(res));

//async await
async function demo(){
    const res=await Promise.resolve("Hello World");
    console.log(res);
}
demo();

// try and catch
async function test(){
    try{
        await Promise.reject("Failed");
    }
    catch(e){
        console.log("handled the error::",e);

    }
}
test();

// api call
function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve({id:1, name:"uday"},1000));
    })
}
async function showUser(){
    const user=await fetchUser();
    console.log(user.name+" "+user.id);
}
showUser();

//multiple api call
async function loadAll() {
  const users = await Promise.all([
    fetchUser(),
    fetchUser(),
    fetchUser()
  ]);

  console.log(users);
}
loadAll();

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data.name);
}
getUser();



