let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


const clonedSinK = structuredClone(passportWithAddress);

clonedSinK.city = "Bobryisk";
console.log(clonedSinK);
console.log(passportWithAddress.address);