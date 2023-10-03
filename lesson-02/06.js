let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const deep = structuredClone(passportWithAddress);
console.log(passportWithAddress[1] === deep[1]);

passportWithAddress.city = "Bobryisk";
console.log(passportWithAddress);
