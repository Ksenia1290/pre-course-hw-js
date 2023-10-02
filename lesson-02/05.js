let passport = {
    name: "Petr",
    surname: "Petrov",
};
Object.assign(passport,{name: "Ivan"});
console.log(passport.name);