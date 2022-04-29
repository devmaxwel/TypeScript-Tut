// Generics
// allows us to create resubale block of codes that can be used with types
import { resourceType } from "./Enums";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "max", age: 10 });
// If i try to access a name or age property like so console.log(docOne.name/ docOne.age) I will get an error because when we return  Object it doesnt know what properties it should return 
console.log(docOne);
// to combat this we use generic type <T> so that when I return an obj it will know the properties of that
const addUID1 = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUID1({ name: "max", age: 10 });
// This time i can access the name or age property
// there is one proble with this i can add astring to the addUID which soly take an object
console.log(docTwo.name);
// To curb that problem above, we can extend the generic to object 
const addUID2 = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID2({ name: "max", age: 10 });
const docSix = {
    uuid: "344hkl",
    resourceName: resourceType.Authour,
    data: {
        name: "Ochieng",
        memo: "not written"
    }
};
const docSeven = {
    uuid: 2345678,
    resourceName: resourceType.Authour,
    data: ["4556", "developer"]
};
