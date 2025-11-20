 //dates

//  let myDate = new Date();
//  console.log(myDate.toString());
//  console.log(myDate.toJSON());
//   console.log(myDate.toDateString());
//   console.log(myDate.toLocaleDateString());
//    console.log(myDate.toLocaleString());

//    console.log(typeof myDate);

//    let myCreatedDate = new Date(2023,0,23)
//    console.log(myCreatedDate.toDateString());

// this is the way of taaking input from the dates and also givr them the input

  let myCreatedDate = new Date("01-14-2023");
//   console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);//long  didgit is a mili second avalue to the given date 
console.log(myCreatedDate.getTime());// FOR COMPARE FIRST AND SECOND TIME VALUE
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

// new way to define local string

newDate.toLocaleString('default',{
    month:'long'
})