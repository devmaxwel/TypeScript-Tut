// Allows us to store set of constants that store numeric value

import { User } from "./genrics";

export enum resourceType{
    Authour, Book, Year
}

const docOne: User<object> = {
    uuid:23456,
    resourceName:resourceType.Book,
    data:{name:"max"}
};
