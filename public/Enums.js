// Allows us to store set of constants that store numeric value
export var resourceType;
(function (resourceType) {
    resourceType[resourceType["Authour"] = 0] = "Authour";
    resourceType[resourceType["Book"] = 1] = "Book";
    resourceType[resourceType["Year"] = 2] = "Year";
})(resourceType || (resourceType = {}));
const docOne = {
    uuid: 23456,
    resourceName: resourceType.Book,
    data: { name: "max" }
};
