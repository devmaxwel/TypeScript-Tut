// Classes
// Implementing interface and class
import { hasFormarter } from "./interface/HasFormarter.js";

// Classes in Typescript ES6
export class Invoice implements hasFormarter {
  // class constructor
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}
  // method
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
