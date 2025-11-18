 const name="krishna"
 const repoCount=10

//  console.log(name+repoCount+"Value");
 // this is most useful format and most undertanding way to understand variables in js 
console.log(`hello my name is ${name}  and my repo count is {10}`);
// in this we use upper case lower case in a very easy way 
const gameName= new String("krishna");
console.log(gameName[1]);// way of calling the string as a index value
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); // convert all the string value ino the upper case 

console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));//index will start at 0 and then count the plaace value
console.log(gameName.endsWith("naa"));// check the lasst value to  give the true or false

const anotherString =gameName.slice(0,4);// it did not include the 4 number it goes (n-1)
console.log(anotherString);
// slice did  take the negative number to print the value at the index number
//but the substring did not take neg value


const newStringone= "  krishna    ";
console.log(newStringone);
console.log(newStringone.trim());//trim se ham space ko hata dete hye 
//trimStart() trimEnd() bhi ham use akr sajate hye 

const url="https://krishna.com/krishna%20yadav";//the browser did not understand the sapce so it will put the value like %20
console.log(url.replace('%20','_'))

console.log(url.includes("krishna"))//it check the value in the url aand gives the result
//string is most powerful thing in the any programing language 




