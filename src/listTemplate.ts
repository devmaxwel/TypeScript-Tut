// Rendering html to the Browser

import { hasFormarter } from "./interface/HasFormarter";

export class listTemplate {
  constructor(private conatainer: HTMLUListElement) {}
  render(item: hasFormarter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (position === "start") {
      this.conatainer.prepend(li);
    } else {
        this.conatainer.append(li)
    }
  }
}
