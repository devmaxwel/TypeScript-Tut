// Tupples are like arrays but different in manner that every entry in tupple have specific types unlike array you can modify the position of data

// array

let arr =["23",45,true]
arr[0] = false;
arr[1]="Maxwel";
arr[2]=56789;

// tupple
let tup: [string, number, boolean] = ["Maxwel",5,false];
// if i try to insert a number at index 0 of tup var it will course an error ==>>  Type 'number' is not assignable to type 'boolean'.

// tup[2]=78