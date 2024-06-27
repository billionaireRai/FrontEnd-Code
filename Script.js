// Exercise-1 faulty calculator

// let a = prompt("Enter first number of your choice");
// let b = prompt("Enter the operation (+, -, *, /)");
// let c = prompt("Enter second number of your choice");

// let obj = {
//     '+': '-',
//     '-': '/',
//     '*': '+',
//     '/': '**'
// };

// let result;
// if (Math.random() <= 0.1) {
//     // perform incorrect calculation
//     result = eval(`${a} ${obj[b]} ${c}`);
//     console.log(`Incorrect result: ${result}`);
// } else {
//     // perform correct calculation
//     result = eval(`${a} ${b} ${c}`);
//     console.log(`Correct result: ${result}`);
// }

// // Exercise-2 BUISNESS NAME generator

// let rand = Math.random();
// let adj = { first: "CRAZY", second: "AMAZING", third: "FIRE" };
// let shop_name = { first: "ENGINE", second: "FOODS", third: "GARMENTS" };
// let ano_wrd = { first: "BROS", second: "LIMITED", third: "HUB" };

// let first, second, third;

// if (rand < 0.33) {
//     first = adj.first;
// } else if (rand < 0.66) {
//     first = adj.second;
// } else {
//     first = adj.third;
// }

// rand = Math.random();

// if (rand < 0.33) {
//     second = shop_name.first;
// } else if (rand < 0.66) {
//     second = shop_name.second;
// } else {
//     second = shop_name.third;
// }

// rand = Math.random();

// if (rand < 0.33) {
//     third = ano_wrd.first;
// } else if (rand < 0.66) {
//     third = ano_wrd.second;
// } else {
//     third = ano_wrd.third;
// }

// let final_name = `${first} ${second} ${third}`;
// console.log(final_name);

// //  Exercise-3 factorial calculator

// // by using for loop
// let a = 9 ;
// function factorial(number){
// let fac = 1 ;
// for (let index = 1; index < number + 1 ; index++) {
//         fac = fac * index ;
//     }
//     return fac;
// }
// console.log(factorial(a));

// // using the concept of array
// function FacArr(number){
//     let arr = Array.from(Array(number + 1).keys());
//     console.log(arr.slice(1,));
//     let c =  console.log(arr.slice(1,).reduce((a,b)=> a*b));
//     return c

// }
// console.log(FacArr(a));

// // OTHER OPERATIONS

// let NAME = "har";
// console.log(NAME.length);

// let My_Quote = "I will be a billionaire"
// let opp1 = My_Quote.includes("age");
// let opp2 = My_Quote.startsWith("be");

// if(console.log(opp1) === true){
//     console.log("if condition is true")
// }

// else {
//       console.log("if condition is false")
// }

// let opp3 = My_Quote.endsWith("billionaire");
// console.log(opp3);

// let L_case = My_Quote.toLowerCase();
// console.log(L_case);

// let U_case = My_Quote.toUpperCase();
// console.log(U_case);

// let Don_amount = "please give Rs 1000";
// let len = Don_amount.length;
// console.log(len);

// let only_amount = Don_amount.slice(15,20);
// console.log(only_amount);

// let change = Don_amount.replace("a","MONEY")
// console.log(change);

// console.log(arr);
// let User_Input = 17;
// let New_arr = arr.push(User_Input);
// console.log(New_arr);

// let Add_Num = prompt("Enter Any Number You Want");
// if (Add_Num == 0) {
//     let New_arr = arr.push(Add_Num);
//     console.log(New_Arr);

//     Break
// }
// else {
//     console.log("Try Again Please");
//     let Add_Num = prompt("Enter Any Number You Want");

// }

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element[-1] === 0 ) {
//         console.log("Yes Divisible By 10");
//         let Add_This = New_Arr.push(element);
//         console.log(New_Arr);

//     }
//     else {
//         console.log("Not Divisible By 10");

//     }

//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         let div_10 = New_Arr.filter(Divisible_by_10);

//     }

// let arr = [2,3,4,5,6,7,8];
// let squ = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     let Opp_Square = element**2;
//     squ.unshift(Opp_Square);

// }

// console.log(squ.reverse());

// driving age detecting software
// var User_Age = prompt("Please Enter your Current Age");

// if (User_Age > 0) {
//     console.log("THIS IS A VALID AGE")
//     if (User_Age >=18) {
//         alert("YOU ARE ALLOWED TO DRIVE")

//     }
//     else {
//         alert("YOU ARE UNDER-AGE")

//     }
// }
// else {
//     alert(console.error("Invalid age: Please enter a valid age between 1 and 100."));

// }

//             alert("HELLOW WORLD");
//                   let State_1 = document.body.querySelector(".box");
//                   State_1.style.color = "red";
//                 //   State_1.style.backgroundImage = "url('first link')";

//                   let State_2 = document.body.querySelector(".container").querySelectorAll(".box")[1];
//                   State_2.style.color = "green";
//                 //   State_2.backgroundImage = "URL('second link')";

//                   let State_3 = document.body.querySelector(".container").querySelectorAll(".box")[2];
//                   State_3.style.color = "blue";
//                 //   State_3.backgroundImage = "URL('third link')";

//                   let State_4 = document.body.querySelector(".container").querySelectorAll(".box")[3];
//                   State_4.style.color = "pink";
//                 //   State_4.backgroundImage = "URL('fourth link')";

//                   let State_5 = document.body.querySelector(".container").querySelectorAll(".box")[4];
//                   State_5.style.color = "orange";
//                 //   State_5.backgroundImage = "URL('fifth link')";

//             var User_Age = prompt("Please Enter your Current Age");

//        if (User_Age > 0)
//                 console.log("THIS IS A VALID AGE");
//                 if (User_Age >=18) {
//                     alert("YOU ARE ALLOWED TO DRIVE");

//                 }
//                 else {
//                     alert("YOU ARE UNDER-AGE");

//                 }
//             }
//             else {
//               alert(console.error("Invalid age: Please enter a valid age between 1 and 100."));

//             }

//             fun code

//             let Any_Num = prompt("Enter any number you want");

//             if (Any_Num > 4) {
//               alert("Redirecting you to Google.com...");
//               window.location.href = "https://www.google.com";
//             }
//             else {
//               alert("NOT A FAVORABLE NUMBER");
//             }

//             background gamer

//             let Value_1 = prompt("Enter a number (0-255) for REDDISH effect to your background");
//             let Value_2 = prompt("Enter a number (0-255) for GREENISH effect to your background");
//             let Value_3 = prompt("Enter a number (0-255) for BLUEISH effect to your background");

//             // Convert input values to integers
//             Value_1 = parseInt(Value_1);
//             Value_2 = parseInt(Value_2);
//             Value_3 = parseInt(Value_3);

//             // Check if input values are within range
//             if (Value_1 >= 0 && Value_1 <= 255 && Value_2 >= 0 && Value_2 <= 255 && Value_3 >= 0 && Value_3 <= 255) {
//                 let final_Bcolor = `rgb(${Value_1}, ${Value_2}, ${Value_3})`;
//                 document.body.style.backgroundColor = final_Bcolor;
//             } else {
//                 alert("Please enter valid numbers between 0 and 255.");
//             }

//             let elem = document.body.querySelector(".container");
//             let first_ele = elem.firstElementChild.style.color = "green";
//             let second_ele = elem.lastElementChild.style.color = "green"
//             console.log("your desired changes are completed")

//             let tag_div = document.getElementById("element");
//             tag_div.hidden = true;

//             let div = document.createElement('div');
//             div.className = "alert";
//             div.innerHTML = "<span> hello </span>";
//             document.body.append(div);
//             document.body.prepend(div);
//             document.body.before(div);
//             document.body.after(div);
//             document.body.replaceWith(div);

//             let newTag = document.createElement('p');
//             newTag.innerHTML = 'Hello';
//             element.insertAdjacentElement('beforeend', newTag);

//             let new_Tag = document.createElement('p');
//             new_Tag.innerHTML = 'bye';
//             element.insertAdjacentElement('afterbegin', new_Tag);

//             tag_div.remove();

//             let New_class = document.body.querySelector(".container");
//             let added = New_class.classList.add("group");
//             New_class.classList.toggle("group");
//             New_class.classList.contains("container");

//             let first_button = document.querySelector(".container").querySelectorAll(".button")[0];
//             first_button.addEventListener("click", first_button = function() {
//               alert("YES RESPONSE IS ACCEPTED THIS IS BUTTON-1");
//             });

//             let  second_button = document.querySelector(".container").querySelectorAll(".button")[1];
//             second_button.addEventListener("click", second_button = function(){
//               alert("THIS IS BUTTON-2");
//             });

//             let third_button = document.querySelector(".container").querySelectorAll(".button")[2];
//             third_button.addEventListener("click", third_button = function(){
//               alert("THIS IS BUTTON-3");
//             });

//             let fourth_button = document.querySelector(".container").querySelectorAll(".button")[3];
//             fourth_button.addEventListener("click", fourth_button = function(){
//               alert("THIS IS BUTTON-4");
//             });

//             my book mark manager INTEGRATED WITH JAVASCRIPT

//             alert("WELCOME TO YOUR HIGH-TECH BOOKMARK MANAGER!!!!")

//             // First Button
//             let first_button = document.querySelector(".container").querySelectorAll(".button")[0];
//             first_button.innerHTML = "WELCOME TO GOOGLE";
//             first_button.addEventListener("click", function() {
//               alert("Redirecting you to Google.com...");
//               window.location.href = "https://www.google.com";
//             });

//             // Second Button
//             let second_button = document.querySelector(".container").querySelectorAll(".button")[1];
//             second_button.innerHTML = "WELCOME TO FACEBOOK";
//             second_button.addEventListener("click", function() {
//               alert("Redirecting you to facebook.com...");
//               window.location.href = "https://www.facebook.com";
//             });

//             // Third Button
//             let third_button = document.querySelector(".container").querySelectorAll(".button")[2];
//             third_button.innerHTML = "WELCOME TO AMAZON";
//             third_button.addEventListener("click", function() {
//               alert("Redirecting you to amazon.com...");
//               window.location.href = "https://www.amazon.com";
//             });

//             // Fourth Button
//             let fourth_button = document.querySelector(".container").querySelectorAll(".button")[3];
//             fourth_button.innerHTML = "WELCOME TO APPLE";
//             fourth_button.addEventListener("click", function() {
//               alert("Redirecting you to apple.com...");
//               window.location.href = "https://www.apple.com";
//             });

//             // Fifth Button
//             let fifth_button = document.querySelector(".container").querySelectorAll(".button")[4];
//             fifth_button.innerHTML = "WELCOME TO MICROSOFT";
//             fifth_button.addEventListener("click", function() {
//               alert("Redirecting you to microsoft.com...");
//               window.location.href = "https://www.microsoft.com";
//             });

// async function LoadScript(src) {
//   return new
//     let ; script = document.createElement("script");
//     script.src = src;

//     await script.onload ; () => {
//       console.log("YOUR SCRIPT IS SUCCESSFULLY LOADED");
//     };

//     script.onerror = () => {
//       console.log("AN ERROR HAS OCCURED IN LOADING YOUR SCRIPT");
//     };

//     document.head.append(script);

// }

// LoadScript("https://www.google.com");

//             Promises

//             try {
//               final_statement = "NAME" + "HELLOWORLD";
//               console.log(final_statement*x);

//             }
//             catch (error) {
//               alert("AN ERROR OCCURED");
//               throw new SyntaxError("PLEASE FIX AND THEN EXECUTE THE CODE");

//             }

// program to calculate HCF of two Number

//       function Highest_Cfac(a, b) {
//   let factor_s = [];

//   if (a === b) {
//     console.log("HCF:", a);
//     return a;
//   }

//   for (let c = 1; c <= Math.min(a, b); c++) {
//     if (a % c === 0 && b % c === 0) {
//       factor_s.push(c);
//     }
//   }

//   if (factor_s.length === 0) {
//     console.log("No common factors found");
//     return;
//   }

//   let HCF = Math.max(...factor_s);
//   console.log("HCF of a and b:", HCF);
//   return HCF;
// }
// // program to calculate LCM of two numbers .

// function Lowest_Cvalue(Num_1, Num_2) {
//   let n = 1;

//   while (n >= 1) {
//     if (Num_1 === Num_2) {
//       let LCM = Num_1;
//       console.log("LCM of these two numbers:", LCM);
//       break;
//     } else if (Highest_Cfac(Num_1, Num_2) === 1) {
//       let LCM = Num_1 * Num_2;
//       console.log("LCM of Num_1 and Num_2:", LCM);
//       break;
//     } else if (Math.min(Num_1, Num_2) * n === Math.max(Num_1, Num_2)) {
//       let LCM = Math.max(Num_1, Num_2);
//       console.log("LCM of Num_1 and Num_2:", LCM);
//       break;
//     } else {
//       let LCM = Highest_Cfac(Num_1, Num_2) * Math.max(Num_1, Num_2);
//       console.log("LCM of Num_1 and Num_2:", LCM);
//       break;
//     }
//     n++;
//   }
// }

// Lowest_Cvalue(20, 12); // Call the function

// advance javascript practice set

// setTimeout(() => {
//     text = ["Hello" , "World"];
//     for (const items of text) {
//         console.log(items);

//     }
// }, 2000);

// let Arr_Num = [];

// function elem_send() {
//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             let Any_value = 1 + 49 * Math.random();
//             Arr_Num.push(Any_value);
//             resolve(Arr_Num);
//         }, 2000);
//     });
// }

// async function sendData() {
//     let data = await elem_send();
//     return data;
// }

// sendData().then(result => {
//     console.log(result); // This will log the array after 2 seconds, and then every 2 seconds after that.

//     let n = result.length; // Calculate the length of the array
//     let Avg_value = result.reduce((a, b) => a + b, 0) / n; // Calculate the average value
//     console.log("Average Value:", Avg_value);
// }).catch(error => {
//     console.error(error);
// });

// (function() {
//     function settle_d(n) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("YOUR PROMISE IS SUCCESSFULLY SETTLED");
//             }, n * 1000);
//          });
//     }

//     // Example usage:
//     settle_d(5).then((message) => {
//         console.log(message); // Output: YOUR PROMISE IS SUCCESSFULLY SETTLED after 3 seconds
//     }).catch((error) => {
//         console.error(error);
//     });
// })();

// simple interest calculator

// var princP_value = 1000;
// var rate_value = 76;
// var time = 10;

// let princP_v = parseInt(princP_value);
// let rate_v = parseInt(rate_value);
// let time_d = parseInt(time);

// let info = [princP_value,rate_value,time];

// let simp_interest = info.reduce((a,b) => a * b , 1)/100 ;
// console.log(simp_interest);
