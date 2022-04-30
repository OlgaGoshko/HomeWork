// Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...).

let age = +prompt('Введіть свій вік')

if (age < 3){
    alert('Ви - дитина')
} else if (age < 12){
    alert('Ви - юніор')
} else if (age < 18){
    alert('Ви - підліток')
} else if (age < 60){
    alert('Ви - дорослий')
} else {
    alert('Ви - пенсіонер')
}


// 2. Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д)

let number = +prompt('Введіть число від 0 до 9')

if (number === 1){
    alert('!')
} else if (number === 2){
    alert('@')
} else if (number === 3){
    alert('#')
} else if (number === 4){
    alert('$')
} else if (number === 5){
    alert('%')
} else if (number === 6){
    alert('^')
} else if (number === 7){
    alert('&')
} else if (number === 8){
    alert('*')
} else if (number === 9){
    alert('(')
}


// 3. Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры.

let several = +prompt('Введіть трьохзначне число')
let several1 = (several / 100)
let several2 = (several / 10)%10
let several3 = (several %10)

if (several1==several2 && several2==several3 && several1==several3){
    console.log('Знайдено співпадіння чисел')
} else {
    console.log('Співпадінь не знайдено')
}
