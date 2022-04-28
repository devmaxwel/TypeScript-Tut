// used to enforece certain type of structures
interface isPerson{
    name:string;
    age:number;
    speak(a:string):void
    spend(a:number):number
}

const me:isPerson ={
    name:"Max",
    age:30,
    speak(text:string){
        console.log(text)
    },
    spend(amount:number):number{
        console.log(`I spend ${amount}`)
        return amount;
    }
}