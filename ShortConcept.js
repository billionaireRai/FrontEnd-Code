// DAY - 1 
// In JavaScript let me tell you a difference b/w Object.values() , Object.entries() , Object.freeze()...
// lets take a JavaScript object...

// let PersonData = {name:"Rahul", age:25 , Profession:"Programmer" , Salary:"$5000" , Company:"Apple"};
// let values = Object.values(PersonData);
// console.log(values);

// output [ 'Rahul', 25, 'Programmer', '$5000', 'Apple' ] 
// Object.values() is used when we only need to deal with (values) of our Object...

// let ArrValue = Object.entries(PersonData);
// console.log(ArrValue);

// output [[ 'name', 'Rahul' ],[ 'age', 25 ],[ 'Profession', 'Programmer' ],[ 'Salary', '$5000' ],[ 'Company', 'Apple' ]]
// Object.entries() is used when we need to deal with both (Key) and (value) in more Programmer friendly way...

// PersonData.name = 'ravi'
// console.log(PersonData) ;

// output  {name: 'ravi',age: 25,Profession: 'Programmer',Salary: '$5000',Company: 'Apple'}
// As you can see the name key is changed to 'ravi'...

// let Freezed = Object.freeze(PersonData) ;
// PersonData.age = 30 ; 
// console.log(PersonData);

// output {name: 'Rahul', age: 25 ,Profession: 'Programmer', Salary: '$5000', Company: 'Apple'}
// Notice that after updating the age to 30 , still age is 25 in our object... 


// DAY-2
/*
In a WEB project While fetching data from 3rd party API we need to insert 
a variable in URl from our side for Targeted data . We use a predefined funtion
in Javascript encodeURIComponent() on that variable ...
*/

// Lets say we are fetching weather data from a weather API....

// const ApiKey = 'Your_api_key_provided_by_api_provider';
// const City = encodeURIComponent('Searched_city');

// const Apiurl = `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${City}`;

// fetch(Apiurl).then((response) => { 
//     if (!response.ok) {
//         throw new Error(`HTTP error! status:${response.status}`);
//     } 
//     return response.json();
//  })
//  .then((data) => { 
//     console.log("Fetched Data:",data);

//     if (data.current && data.current.temp_c) {
//         const Temperature = data.current.temp_c ;
//         console.log("Current Temperature in Celcius :", Temperature);
        
//     }
//   })
// .catch((error) => { 
//     console.log('Error in fetching weather data', error);
//  })

// We use encodeURIComponent() function to make our variable suitable for URL usage...


// DAY-3 (Integration Part - 1 : ONLY TEXT TO TEXT CONVERSATION )
// Few days ago , Google has published a npm package for (AI) integration in Javascript codebase...
// By this integration we can provide (AI) features & support to our client seamlessly...

// command for installation - npm install @google/generative-ai

// const { GoogleGenerativeAI } = require('@google/generative-ai') ;

// // set your API here...
// // creating an Package instance...
// const genAI = new GoogleGenerativeAI(Proccess.env.API_KEy) ;

// async function askPrompt(prompt:string) {
//     // defining the (AI) model for usage...
//     const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
    
//     // passing Prompt for generating content...
//     const result = await model.generateContent(prompt) ;
//     const response = await result.response ; 
//     const text = response.text() ; 
//     console.log(text) ;
    
// }

// askPrompt();


// DAY-4 (Integration Part - 2 : TEXT & IMAGE CONVERSION)

// const {GoogleGenerativeAI} = require('@google/generative-ai');
// const fs = require('fs') ;

// // Set your API here...

// const genAI = new GoogleGenerativeAI(process.env.API_KEY) ;

// // Converts localfiles information to GoogleGenerativeAI Parts object...
// function filestoGenerativePart(Path,mimetype) {
//     return {
//         inlineData:{
//             data:Buffer.from(fs.readFileSync(Path).toString("base64") , mimetype )
//             // mimetype means relative path...
//         }
//     }    
// }

// async function run() {
//     // Using Gemini-1.5 model...
//     const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"}) ;
//     const Prompt = "What is the difference between these two images" ;
//     const imagesParts = [filestoGenerativePart('image1.png','image/png'),filestoGenerativePart('image2.png','image/jpeg'),] ;

//     const result = await model.generateContent([Prompt,...imagesParts]) ;
//     const response = await result.response ;
//     const text = response.text() ;
//     console.log(text);
    
// }
// run();

// DAY-4 (Integration Part - 3 : MULTI CONVERSATION (CHATTING) BASED ON AI)
// const {GoogleGenerativeAI} =  require('@google/generative-ai') ;
// // Set your API here...

// const genAI = new GoogleGenerativeAI(Proccess.env.API_KEY) ;

// async function run() {
//     const model = genAI.getGenerativeModel({model:'gemini-1.5-flash'}) ;
//     const chat = model.startChat({
//         history:[{
//             role:'user',
//         Parts:[{
//             text:'Hellow , I have 2 Dogs in my house'
//         }]    
//         }
//     ],
//     generationConfig:{maxOutputTokens:100} ,
// });

// const msg = 'How many paws are there in my house ?';
// const result = await chat.SendMessage(msg) ;
// const text = response.text() ;
// console.log(text) ;
    
// }

// run();

// DAY-5 (Integration Part - 3 : STREAMING IN TEXT + IMAGE CATEGORY OF (AI) INTEGRATION)...
// const {GoogleGenerativeAI} = require('@google/generative-ai') ;

// API_KEY ='PUT_YOUR_API_kEY_HERE';
// const genAI = new GoogleGenerativeAI(proccess.env.API_KEY)

// // // Converts localfiles information to GoogleGenerativeAI Parts object...
// function filestoGenerativePart(Path,mimetype) {
//     return {
//         inlineData:{
//             data:Buffer.from(fs.readFileSync(Path).toString("base64") , mimetype )
//             // mimetype means relative path...
//         }
//     }    
// }
// async function run() {
//     const model = genAI.getGenerativeModel({model:'gemini-1.5-flash'})
//     const prompt = "Enter_your_prompt_here" ;
//     const imagesParts = [filestoGenerativePart('image1.png','image/png'),filestoGenerativePart('image2.png','image/jpeg'),] ;
//     const result = await model.generateContentStream([prompt , ...imagesParts]) ;
//     const text = response.text() ;

//     for await (const chunk of result.Stream){
//         const chunkText = chunk.text() ;
//         console.log(chunkText) ;
//         text += chunkText ;
//     }
    
// }
// run() ;

// Understanding javascript dates...
const current_date = new Date();
console.log(current_date) ;
// console.log(current_date.toString());   // Sun Oct 06 2024 11:10:44 GMT+0530 (India Standard Time)
// console.log(current_date.toISOString());   // 2024-10-06T05:41:32.681Z
// console.log(current_date.toLocaleString());   // 10/6/2024, 11:12:28 AM
// console.log(current_date.toLocaleDateString());   // 10/6/2024
// console.log(current_date.toLocaleTimeString());   // 11:14:56 AM
// console.log(current_date.toTimeString());   // 11:16:13 GMT+0530 (India Standard Time)
// console.log(current_date.toUTCString());   // Sun, 06 Oct 2024 05:46:47 GMT
// console.log(current_date.toJSON());   // 2024-10-06T05:47:56.570Z
// console.log(current_date.valueOf());   // returns milliseconds as 1728193796375
