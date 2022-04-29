import { hasFormarter } from "./interface/HasFormarter.js";
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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template
// The exclamation mark means that we're definately going to find yhe ul tag and it will not be of type null
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: hasFormarter;
  // Lets use tupples
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "start");
});

// Rendering Html
