
// 1) 
let action = "move";

switch(action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action");
};



// 3)
let vegetables = "Carrot";

switch(vegetables) {
    case "Carrot":
        alert("Hello");
        break;
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("Neither");
};



// 4)
// შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. 
// თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, 
// რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, 
// რომ მომხმარებელს შეუძლია ხმის მიცემა.

function ageChecking(age) {
    const rightAge = Number(age);

    // if(rightAge >= 18) return alert("მომხმარებელს შეუძლია ხმის მიცემა.")
    // else return alert("მომხმარებელს არ შეუძლია ხმის მიცემა.");

    return age >= 18 ? alert("მომხმარებელს შეუძლია ხმის მიცემა.") : alert("მომხმარებელს არ შეუძლია ხმის მიცემა.");
};

const age = prompt("Enter your age for checking");
ageChecking(age);


// 5)
// შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია
const strongPasswordChecking = function(password) {
    // 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
    if(isNaN(password) && password.length < 3) {
        return alert("პაროლი უარგისია");
    } 
    // 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
    else if (isNaN(password) && password.length >= 3 && password.length <= 6) {
        return alert("პაროლი სუსტია");
    }
    // 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
    else if (isNaN(password) && password.length >= 6 && password.length <= 8) {
        return alert("პაროლი მისაღებია");
    }
    // 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
    else if (isNaN(password) && password.length >= 8 && password.length <= 16) {
        return alert("პაროლი ძლიერია");
    }
    // 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.
    else if(!isNaN(password)) {
        return alert("პაროლი უარგისია");
    }
};

const password = prompt("Enter your password for checking");
strongPasswordChecking(password);



// 5)
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), 
// რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის 
// პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

function factorialCalculator(number) {
    if (number < 0){
        return alert("---")
    } else if (number === 0) {
        return 1
    }else {
    return number * factorialCalculator(number - 1)
}
};
const num = prompt('enter number for factorial calculation')
alert(factorialCalculator(num));


// 6)
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს 
// მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

const firstUpperCase = word => {
    const rightWord = word.toLowerCase();
   return rightWord.at(0).toUpperCase() + rightWord.slice(1);
};
console.log(firstUpperCase('paPashvili'));




// 7) 
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. 
// მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ 
// this string is not blank-ს თუ ცარიელი არაა.

const blankStringChecker = string => (string.trim().length === 0) ? console.log('this string is blank') : console.log('this string is not blank');

blankStringChecker(" ");