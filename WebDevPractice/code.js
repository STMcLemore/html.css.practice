let age;
age = 32;
let favoriteFood = "Pizza";
let firstName = "Stephen";
let interest = "Web Development";
let school = "Code Louisville";
let city = "Louisville";
let LinkedIn = "https://www.linkedin.com/in/stephen-mclemore-dev217/";
let GitHub = "https://github.com/STMcLemore";


console.log(firstName.charAt(3));

 document.getElementById("p1").textContent = `My name is ${firstName}.`;
 document.getElementById("p2").textContent = `I am ${age} years old.`;
 document.getElementById("p3").textContent = `My favorite food is ${favoriteFood}.`;
 document.getElementById("p4").textContent = `I am interested in ${interest}.`;
 document.getElementById("p5").textContent = `I attend ${school}.`;
 document.getElementById("p6").textContent = `I live in ${city}.`;
 document.getElementById("l1").href = LinkedIn;
 document.getElementById("l2").href = GitHub;

