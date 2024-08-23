const name = "Justin"
const repoCount = 5

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String ('justin-nc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) 
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "     justin      "
console.log(newString1);
console.log(newString.trim());

const url = "https://justin.com/jsutin%20charles"

console.log(url.replace('%20', '-'))
console.log(url.includes('subnbdnay'));

console.log(gameName.split('-'));
