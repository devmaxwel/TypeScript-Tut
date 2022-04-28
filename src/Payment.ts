import { hasFormarter } from "./interface/HasFormarter.js";

export class Payment implements hasFormarter {
  // class constructor
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  // method
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
