let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress);

const copied = structuredClone(passportWithAddress)

passportWithAddress.city = "Bobryisk";
console.log(passportWithAddress );
