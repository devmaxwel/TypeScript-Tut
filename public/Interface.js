"use strict";
const me = {
    name: "Max",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
