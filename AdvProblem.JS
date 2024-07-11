// // // PROBLEM -1 THE MAGICAL SORTING HAT

// // let Arr_Stu = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", "Isaac", "Jasmine", "Kevin", "Linda", "Michael", "Nancy", "Olivia", "Patrick", "Quincy", "Rachel", "Samuel", "Tina"];
// // // Total no.of students in Arr_Stu are 20.
// // // index is from 0 ... 19

// // // CONCEPT LEARNED - Regarding your concern about the condition Name.length < 6 being EVALUATED TWICE , it's not the case. Each name is only evaluated once in the loop, and based on its length, it's placed into one of the four houses. If a name meets multiple conditions (for example, if it's less than 6 characters long), it will only be placed into the first house that matches the condition. So, it won't be placed into Gryffindor twice. EACH NAME WIL BE ASSIGNED TO ONE HOUSE ONLY.

// // let Gryffindor = [];
// // let Hufflepuff = [];
// // let Ravenclaw = [];
// // let Slytherin = [];

// // // main programing LOGIC is within this function..
// // function House_Assigner(Array) {
// //     for (const Name of Array) {
// //         if (Name.length < 6) {
// //             Gryffindor.push(Name);
// //         }
// //         else if (Name.length < 8) {
// //             Hufflepuff.push(Name);
// //         }
// //         else if (Name.length < 12){
// //             Ravenclaw.push(Name);
// //              // Array of this house will be empty as in there is NO name in Arr_Stu whose character length is b/w 8 and 12...
// //         }
// //         else {
// //             Slytherin.push(Name);
// //              // Array of this house will be empty as in there is NO name in Arr_Stu whose character length is b/w 8 and 12...
// //         }
// //     }
// //     console.log("Gryffindor:", Gryffindor);
// //     console.log("Hufflepuff:", Hufflepuff);
// //     console.log("Ravenclaw:", Ravenclaw);
// //     console.log("Slytherin:", Slytherin);
// // }

// // House_Assigner(Arr_Stu);

// // PROBLEM -2 DOUBLE TROUBLE
// // let random_words = ["elephant", "bicycle", "bicycle", "mountain", "coffee", "candle", "coffee", "star", "jazz", "guitar"];
// // let New_Arr = [];

// // function Elem_Duplicator(Arr) {
// //     console.log("Main Array :",random_words);
// //     for (let ind_x = 0; ind_x < Arr.length; ind_x++) {
// //         if (Arr[ind_x] === Arr[ind_x + 1]) {
// //             const element = Arr[ind_x] ;
// //             Arr.splice(ind_x + 1 , 1);
// //             New_Arr.push(element);
// //             New_Arr.push(element);
// //             New_Arr.push(element);
// //         }
// //         else {
// //             const ele_m = Arr[ind_x];
// //             New_Arr.push(ele_m);
// //             New_Arr.push(ele_m);
// //         }
// //     }
// //     console.log("Required Array :",New_Arr);
// // }

// // Elem_Duplicator(random_words);

// // PROBLEM -3 MIRROR MIRROR
// // let My_Str = "I want to be a billionaire";

// // // This function will contain the main programming logic of this problem...
// // function Mirror_Image(String) {
// //     let New_String = ""; // Initialize New_String to an empty string
// //     for (let i = String.length - 1; i >= 0; i--) {
// //         New_String += String[i]; // Append each character of String in reverse order to New_String
// //     }
// //     let Final_Str = String + New_String; // Concatenate the original and mirror images
// //     console.log("Updated String:", New_String);
// //     console.log("Strings Together:", Final_Str);
// // }

// // Mirror_Image(My_Str);

// // PROBLEM -4 THE PASSWORD VALIDATOR
// // let Digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // function PW_Validator(password) {
// //   let containsDigit = false;
// //   let containsUppercase = false;
// //   let containsLowercase = false;

// //   if (password.length < 8) {
// //     console.log("Reminder: Your password should have at least 8 characters");
// //   } else {
// //     for (let i = 0; i < password.length; i++) {
// //       if (!isNaN(password[i])) {
// //         containsDigit = true;
// //       } else if (
// //         password[i] === password[i].toUpperCase() &&
// //         password[i] !== password[i].toLowerCase()
// //       ) {
// //         containsUppercase = true;
// //       } else if (
// //         password[i] === password[i].toLowerCase() &&
// //         password[i] !== password[i].toUpperCase()
// //       ) {
// //         containsLowercase = true;
// //       }
// //     }

// //     if (!containsDigit) {
// //       console.log("Your password should contain at least one digit");
// //     }
// //     if (!containsUppercase) {
// //       console.log("Your password should contain at least one uppercase letter");
// //     }
// //     if (!containsLowercase) {
// //       console.log("Your password should contain at least one lowercase letter");
// //     }
// //     if (containsDigit && containsUppercase && containsLowercase) {
// //       console.log("Your Password is an excellent one");
// //     }
// //   }
// // }

// // let Pass_word = "Amritansh@";
// // PW_Validator(Pass_word);

// // PROBLEM -5 THE SUM SELECTOR
// // CONCEPT -  we can give multiple inputs inside a reduce() function.......

// // function Sum_Selector(Array) {
// //     let final_v = 0;
// //     for (let i = 0; i < Array.length; i++) {
// //       if (Array[i] < 0) {
// //         break; // Stop the loop when first negative number is encountered
// //       }
// //       final_v += Array[i]; // Accumulate the sum
// //     }

// //     console.log(Array);
// //     console.log("This is the sum of elements before first negative number encounters :",final_v); // Sum of all elements until the first negative number
// //   }

// // let Arr = [23, 56, 43, 45, 2, 54, 12, -33, 75, 1];
// // Sum_Selector(Arr);

// // PROBLEM -6 THE VOWEL COUNTER...
// // This code was 100% correct in my first round of encounter......

// // let Total_vowel = ["A","E","I","O","U","a","e","i","o","u"];
// // let count = 0 ;

// // function Vowel_counter(String) {
// //     for (let i = 0; i < String.length; i++) {
// //         const element = String[i] ;
// //         for (let e = 0; e < Total_vowel.length; e++) {
// //             const ele_m = Total_vowel[e];
// //             if ( element === ele_m ) {
// //                 count += 1 ;
// //                 break ;

// //             }
// //         }
// //     }
// //     console.log(count);
// // }

// // let Any_str = "My Net-Worth is 50 billion dollors.";
// // console.log(Any_str);
// // Vowel_counter(Any_str);

// // PROBLEM -7 THE LOCAL STORAGE MANAGER...

// // function Save_local(obj) {
// //     localStorage.setItem("Mytext",JSON.stringify[title,desc]);
// //      title.value = "TO-DO LIST"
// //      title.desc = "This is a website used to store your TO-DO's of the day."
// //      console.log("List is saved in local storage of your device..")

// // }
// // let obj = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam perferendis nisi tenetur harum. Sit, doloremque laborum labore, tempore quo optio eaque nesciunt necessitatibus quaerat eligendi voluptas et. Maxime rerum neque adipisci repudiandae odio, ipsum quos id quam odit dolorem!"

// // Save_local(obj)

// // PROBLEM -8 ASYNC ARRAY MAPPING..

// // async function Arr_mapper(Array, New_Arr) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             try {
// //                 for (let i = 0; i < Array.length; i++) {
// //                     let New_Num = Array[i] * 2;
// //                     New_Arr.push(New_Num);
// //                 }
// //                 resolve(New_Arr); // Resolve the promise with the new array
// //             } catch (error) {
// //                 reject(error); // Reject the promise if there's an error
// //             }
// //         }, 500);
// //     });
// // }

// // // Example usage:
// // let arr = [0,1,2,3,4,5,6,7,8,9];
// // let newArr = [];
// // console.log(arr)
// // Arr_mapper(arr, newArr)
// //     .then(result => {
// //         console.log("New array:", result);
// //     })
// //     .catch(error => {
// //         console.error("Error:", error);
// //     });

// // PROBLEM -9 THE ASYNCHRONOUS SHOPPER
// // let rand_Delay_1 = 1 + 4 * Math.random();
// // let rand_Delay_2 = 1 + 4 * Math.random();

// // async function Place_Order() {
// //     return new Promise((resolve, reject) => {
// //         try {
// //             console.log("Identifing your selected item...");
// //             setTimeout(() => {
// //                 console.log("Checking the fullfillment of all FORMALITIES...")
// //             }, rand_Delay_1 * 1000);
// //             setTimeout(() => {
// //                 resolve("Your Order is SUCCESSFULLY placed !!!")
// //             }, rand_Delay_2 * 1000);

// //         }
// //         catch (error) {
// //             reject(new Error("An errored occured in finallizing your order"))

// //         }

// //     })

// // }
// // Place_Order()
// // .then((result) => {
// //     console.log("Congratulation:",result)
// //  })
// //  .catch((error) => {
// //     console.log("Error:",error)
// //   })

// // PROBLEM -10 THE COFFEE MACHINE
// // My this code was 95 % correct in my first attempt of solving...

// // async function BrewCoffee(Coffee_type) {
// //     return new Promise((resolve, reject) => {
// //       try {
// //         console.log("Understanding your choice of COFFEE...");
// //         const rand_Del = 1 + 4 * Math.random(); // Random delay for brewing
// //         setTimeout(() => {
// //           console.log(`Preparing Your Ordered ${Coffee_type} COFFEE...`);
// //           console.log("Just Wait For a While...");
// //         }, rand_Del * 1000);
// //        setTimeout(() => {
// //          resolve(`Your ${Coffee_type} coffee is READY NOW !!!!`);
// //        }, (rand_Del + 5) * 1000);
// //       } catch (error) {
// //         reject(new Error("An error occurred while dealing with your choice!"));
// //       }
// //     });
// //   }

// //   let Coffee_type = [
// //     "Capecheuno",
// //     "Fapecheuno",
// //     "Latte",
// //     "Cold Coffee",
// //     "Hot Coffee",
// //     "Creamy Coffee",
// //   ];

// //   let Rand_index = Math.floor(Math.random() * Coffee_type.length);
// //   console.log(Coffee_type);
// //   BrewCoffee(Coffee_type[Rand_index])
// //     .then((message) => {
// //       console.log(message);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });

// // PROBLEM -11 THE ARRAY FILTERER..
// // This code was also 95 % correcct in my first attempt of solving..
// // const products = [
// //     {
// //       name: "Smartphone",
// //       description: "The latest model from a popular brand, with advanced features like multiple cameras and fast processors.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Wireless Headphones",
// //       description: "High-quality over-ear headphones with noise-canceling technology for immersive audio experiences.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Fitness Tracker",
// //       description: "A wearable device that tracks steps, heart rate, and sleep patterns to help users stay active and monitor their health.",
// //       Criterian: "fitness"
// //     },
// //     {
// //       name: "Coffee Maker",
// //       description: "A programmable coffee maker with a built-in grinder, perfect for brewing fresh coffee at home.",
// //       Criterian: "Kitchen Device"
// //     },
// //     {
// //       name: "Portable Bluetooth Speaker",
// //       description: "A compact speaker with powerful sound quality and long battery life, ideal for outdoor gatherings or travel.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "E-book Reader",
// //       description: "A lightweight device with an e-ink display for reading digital books comfortably, even in bright sunlight.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Smartwatch",
// //       description: "A sleek smartwatch with fitness tracking, notification alerts, and customizable watch faces.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Electric Toothbrush",
// //       description: "A rechargeable toothbrush with multiple brushing modes and a built-in timer for effective oral care.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Robot Vacuum Cleaner",
// //       description: "A smart vacuum cleaner that automatically navigates and cleans floors, controlled via a smartphone app.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     },
// //     {
// //       name: "Instant Pot",
// //       description: "A versatile kitchen appliance that functions as a pressure cooker, slow cooker, rice cooker, steamer, and more, making meal preparation convenient and efficient.",
// //       Criterian: "ELECTRONIC DEVICE"
// //     }
// //   ];

// // function Filter_Product(criterion) {
// //     let filtered_array = [];
// //     for (const Product of products) {
// //         if (Product['Criterian'] === criterion) {
// //               filtered_array.push(Product);
// //         }
// //     }
// //     console.log(filtered_array);
// // }

// // Filter_Product("ELECTRONIC DEVICE");

// // PROBLEM -12 THE TOKEN MANAGER
// // This paticular program was COMPLETELY NEW for me....But instead of that I did it 60% correct.

// // function SetAuthToken(Token, expirationTimeInMinutes) {
// //     // Calculate the expiration time in milliseconds
// //     let expiry_date = Date.now() + (expirationTimeInMinutes * 60 * 1000);

// //     // Store the token and expiration time in local storage
// //     localStorage.setItem('AuthenticationToken', Token);
// //     localStorage.setItem('ExpirationTime', expiry_date);

// //     console.log("Token set successfully");
// //     console.log("Expiration time:", new Date(expiry_date));
// //  }

// //  SetAuthToken("your_token_here", 60); // Set token to expire in 60 minutes

//  PROBLEM -13 THE SHOPPING CART MANAGER..
//  CONCEPT - x.toFixed(2) means that round-off the value of x upto 2 decimal places.

// let Added_Items = [
//   { item: "Wireless Mouse", quantity: 3, cost_per_item: 15.99 },
//   { item: "Bluetooth Earphones", quantity: 2, cost_per_item: 29.99 },
//   { item: "Portable Power Bank", quantity: 1, cost_per_item: 26.99 },
//   { item: "Stainless Steel Water Bottle", quantity: 4, cost_per_item: 12.49 },
//   { item: "LED Desk Lamp", quantity: 2, cost_per_item: 30.99 },
//   { item: "Wireless Charging Pad", quantity: 1, cost_per_item: 2100.00 },
//   { item: "USB-C Charging Cable", quantity: 3, cost_per_item: 10.99 },
//   { item: "Bluetooth Speaker", quantity: 2, cost_per_item: 40.99 },
//   { item: "Travel Backpack", quantity: 1, cost_per_item: 50.00},
//   { item: "Smartphone Tripod", quantity: 2, cost_per_item: 10.99 },
// ];

// console.log("THESE ARE THE ITEMS YOU HAVE ADDED TO CART...");
// console.log(Added_Items);
// console.log("Let's move on to the PAYMENT part now...");

// function CalculateTotal(Array) {
//   let totalCost = 0;
//   for (let i = 0; i < Array.length; i++) {
//     totalCost += Array[i].quantity * Array[i].cost_per_item;
//   }
//   console.log(
//     "Here's the TOTAL cost of your order: Rupees",
//     totalCost.toFixed(0)
//   );
// }

// CalculateTotal(Added_Items);

// EXERCISE - javascript interview problem...

// We have array students , we need to return only names of the students...
let students = [
    {name:"Piyush" , rollNumber: 31 , marks: 80},
    {name:"Jenny" , rollNumber: 15 , marks: 69},
    {name:"Kaushal" , rollNumber: 16 , marks: 35},
    {name:"Dilpreet" , rollNumber: 7 , marks: 55}
] 

// let Names = [];
// for (const StuD of students) {
//     let element = StuD.name.toUpperCase() ;
//     Names.push(element);
// }

// console.log(Names);

// I solved It successfully in my first attempt...

// EXERCISE- LETS ADD KHATA NUMBER BY PROGRAMMING

// let value_obj = {
//     cost_1 : 177 ,
//     cost_2 : 126 ,
//     cost_3 : 141 ,
//     cost_4 : 136 ,
//     cost_5 : 160 ,
//     cost_6 : 192 ,
//     cost_7 : 143 ,
//     cost_8 : 107 ,
//     cost_9 : 10  ,
//     cost_10 : 95 ,
//     cost_11 : 212 ,
//     cost_12 : 107
// }

// const values = Object.values(value_obj).reduce((a,b) => a + b ) ;
// console.log(values) ;