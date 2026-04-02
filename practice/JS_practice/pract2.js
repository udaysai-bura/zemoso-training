arr=['Uday',"sai"]
arr.push("Bura")
console.log(arr);
copy=[...arr]
console.log(copy)
class zemoso{
    constructor(){    
        this.name="Dev";
    }
    show(){
        return `welcome ${this.name}`;
    }
};
const obj=new zemoso();
console.log(obj.show());
const arr2={0:'fo' ,1:'foo' ,2:"foo" , length:3};
const arr3=Array.from(arr2);
console.log(arr2);
console.log(arr3);
class n{
    constructor(){
        this.first="uday";
        this.last="sai";
    }
}
function get(x)
{
    var {first,last}=x;
    return `${first}`;
}
const obj2=new n();
console.log(get(obj2));
setTimeout(()=>console.log("Hello guys"),2000)




