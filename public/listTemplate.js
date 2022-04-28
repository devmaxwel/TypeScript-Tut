// Rendering html to the Browser
export class listTemplate {
    constructor(conatainer) {
        this.conatainer = conatainer;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (position === "start") {
            this.conatainer.prepend(li);
        }
        else {
            this.conatainer.append(li);
        }
    }
}
