/*function Car()
{
    console.log("Hellow This is a Car function you are calling");
    
}
Car()*/
/*function add(a :number,b: number)
{
return a+b
}
let y=add(10,20)
console.log(y);*/

/*function multiple(a:number,b:number)
{
    return a*b
}
let m=multiple(10,5)
console.log(m);*/

/*function square(a:number)
{
    return a*a
}
let x=square(6)
console.log(x);*/
/*function even(a:number)
{
    if(a%2==0)
    {
        console.log("The given Number is Even ");
        
    }
    else{
        console.log("The given Number is odd");
        
    }
}
even(4)
*/
/*function Largest(a:number,b:number)
{
    if(a<=b)
    {
        console.log("The given Number is Largest And Number is"+" "+b);
    }
}
Largest(3,23)*/
/*function vote(a : number)
{
    if(a>=18)
    {
      return   console.log("You can Vote");
        
    }
    else{
     return     console.log("You can not Vote");
    }
}
// let x= vote(17)
let y= vote(22)*/
/*function grade(a:number){
    if(a>=90)
{
    return "A+"
}
else if(a>=80)
{
return "A"
}
else if(a>=70)
{
    return "B"
}
else if(a>=60)
{
return "c"
}
else{
    return "You Are Fail"
}
}
 let x=grade(55)
console.log(x)*/
/*function login(id: string,pass:string)
{
if(id=="Shubham" &&pass=="Sample@123")
{
return "Navigate To Dashboard"
}
else{
    return "Please entre valid crendential"
    
}
}
let x=login("Shubham","sample@123")
console.log(x);*/
/*function atm(balance: number,Withdrawal:number)
{
if(balance>=Withdrawal)
{
return "Sucessfull Withdrawal"
}
else
{
    return "Insufiicent Balance"
}
}
let x=atm(5000,300000)
console.log(x);*/
/*function amazon(price:number)
{
    if (price>=1000)
    {
        return "You Are Eligible For Free delivery"
    }
    else{
        return "You Are NOT Eligible For free delivery"
    }
}
let x=amazon(7000)
 console.log(x);*/
 
/* function restaruntbill(bill:number)
 {
if(bill>=2500)
{
return "You are eligible For 10% Discount"
}
else if(bill>=1500)
{
    return "You are eligible For 5% Discount"
}
else{
    return "You are Not eligible for  Discount"
}
 }
let x= restaruntbill(14999)
console.log(x);*/
/*function amazonPrime(isprime:boolean,amount:number)
{
    if(isprime)
    {
if(amount>=500)
{
return "Free Same-Day Delivery"
}
else if(amount<500)
{
return "Free Standard Delivery and you have to pay some delivery charges ok!!"
}
    }
    else{
        return "Delivery Charges Apply You Are not Prime Member"
    }
}
let x= amazonPrime(true,1000)
console.log(x);*/
 /*function netflix(isTrue:boolean,age:number)
 {
    if(age>=18&&isTrue)
    {
        return "Watch All Movies"
    }
    else if(age<18&&isTrue)
    {
        return "Kids Content Only"
    }
    else{
        return "Please Buy Subscription"
    }
 }
let m=netflix(true,17)
console.log(m);*/
/*let example=(age:number,balance:number)=> {
    return age+balance
}
let x=example(12,8)
console.log(x);
*/
/*const temp=(a:number,b:number)=>
    {
        a+b

    }

const res=temp(10,20)
console.log(res);
*/
 function sample(name:string,age?:number)
 {
if(age==undefined)
{
console.log(name);
}
else{
    console.log(name,age);
    
}
 }
 sample("Shubham")
 sample("yash",87)




