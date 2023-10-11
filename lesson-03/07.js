
const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
let a = [];
for (line of numbers){
  new_line =[]
  for (num of line) {
    if (num % 2 == 0){
      new_line.push(num);
    }
  }
  a.push(new_line);
}
console.log(a);





  
    