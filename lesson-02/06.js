let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress);

passportWithAddress.circular = passportWithAddress;
const clonedSink = structuredClone(passportWithAddress);

passportWithAddress.city = "Bobryisk";
console.log(passportWithAddress );
