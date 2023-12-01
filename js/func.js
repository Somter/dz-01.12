"use strict"
//1 
// function WaterCalculation() {
//     let min_water = 10; 
//     let func1 =  parseInt(prompt("Укажите количество воды в литрах"));  

//     let waterCalculator2 = () => {
//         let days = 0;

//         let calculateDays = () => {
//             func1 -= (10 / 100) * func1;
//             days++;
//         };

//         while (func1 >= min_water) {
//             calculateDays();
//         }

//         return days;
//     };

//     let result = waterCalculator2();

//     if (result > 0) {
//         alert(`Вода хватит на ${result} дней.`);
//     } else {
//         alert("Аварийная ситуация! Объем воды слишком мал для нормальной работы.");
//     }
// }


// //2
// function SayError()
// {
//     let Message = () => alert("Some error occured!");
//     Message();  
// }

// //3
// function ShowError(x) {
//     let func = () => alert("Error " + x + " occurred!");
//     func();
// }

// let x = prompt("Massege");

// //4
// function CreateHeaders(N)
// {
//     let header = () =>{
//         for(let i = 1; i <= N; i++){
//             document.write("Header" + i);   
//             document.write("<br>");   
//         }
//     }
//     header();   
// }

// let n = prompt("N = ");

//5
// function checkPassword(x)
// {
//     let passw = Array("Step", "Web", "JavaScript"); 

//     let func = () => passw.indexOf(x);    

//     if(func() != -1){
//         alert("Верный пароль");
//     }
//     else {
//         alert("Пароль не верный");
//     }

// }

// let x = prompt("Введите пароль");  

// //6
// function sign(x)
// {
//     let func = () => {
//         if(x < 0){
//             return "Число отрицательное";
//         }
//         else if(x > 0){
//             return "Число положительное";
//         }
//         else{
//             return "Ноль";  
//         }
//     }
//     alert(func());  
// }

// let x = prompt("Введите число");     

// //7
// function Days(x)
// {
//     let DaysArray = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

//     let func = () => alert(DaysArray[x]); 
//     func();       
// }

// let x = prompt("Введите номер дня");  

