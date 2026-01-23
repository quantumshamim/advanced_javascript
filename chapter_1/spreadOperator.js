//constructing array literal

let valueOne = [1,2,3,4,5];
let valueTwo = [...valueOne,6,7,8,9,0];

console.log(valueTwo)


//concating arrays

let hablu = ['ahad', 'shajeeb', 'tutul'];
let team = ['you', 'me', 'they'];

let habluTeam = [...hablu, ...team];

console.log(habluTeam);


//copying an array

let score = [80,90,100];
let worldCup = [...score]

console.log(worldCup)