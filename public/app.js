import { Invoice } from "./Invoice.js";
import { listTemplate } from "./listTemplate.js";
import { Payment } from "./Payment.js";
// const invOne = new Invoice("maxwel","build-app", 300);
// const invTwo = new Invoice("maxwel", "build-website", 250);
// let docOne:hasFormarter
// let docTwo:hasFormarter
// docOne = new Invoice("max","creates database",1500);
// docTwo = new Payment("ochieng","a cto enginer", 3000);
// let docs:hasFormarter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log((docs))
// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// Inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template
// The exclamation mark means that we're definately going to find yhe ul tag and it will not be of type null
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
// Rendering Html
