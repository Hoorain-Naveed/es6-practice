 
const a=566;
console.log(a)
    {
    for(i=0;i<10;i++){ 
       console.log(i)
            }
    let b=20;


}
{
    let a=10;

}
console.log(a)
const work=(a,b)=>{
    console.log(a+b)
}
work(5,4)

// const work=(a,b)=>a+b
// console.log(work(5,4))
// work()
// const number=[1,2,3,4]
// const ts=number.map((numbers)=>numbers+2)
// console.log(ts)

const vi=[2,5,7,9,8,89,67,89,45,78]
const v=vi.filter((vi)=>(vi>10))
console.log(v)

const vee=vi.forEach((vi)=>{
    let b=vi*2
    console.log(b)
})

const ac=vi.map(vi=>vi*2)
 console.log(ac)

function mine(a,b,c=10){
    console.log(a+b+c)
}
mine(10,20)===40  

function must(a,b,...c){
    let ab=0;

   c.forEach(c=>{
    ab+=c

   })
    console.log(a+b+ab)
}
// must(10,20,40,50,6)


    function me(a,b,...c){
let ab=0
c.forEach(c=>{
    ab+=c})
    console.log(a+b+ab)
    } 
let num=[1,2,3,4,5,6,7];
let baa=Math.max(...a)
console.log(baa)
var str = "foo"
var chars = [ ...str ]
console.log(chars);
let val=8
console.log(`me ${val}`)
console.log(`${val==8?true:false}`)
const x=5,y=7;
const o={x,y}
alert(`${a==5?true:false}`)
//////////////////////////sets/////////////////////
const s=new Set()
s.add(5);
s.add(10);
s.add(20);
s.add(10);

s.delete(10)
const bu=s.has(10);
console.log(bu)

class car{
constructor(name,model){
this.name=name
this.model=model
}
displayinfo(){
console.log(`name:${this.name} model${this.model}`)
}
}
const an=new car("bike",2011)
const b=new car("car",2011)
an.displayinfo();
b.displayinfo();



