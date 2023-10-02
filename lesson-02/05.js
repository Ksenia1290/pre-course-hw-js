let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name);

Object.assign(passport,{name: "Ivan"});
console.log(passport.name);