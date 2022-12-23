const student = "Лисиця Василий Евгеньевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...



function getRandomIntInclusive(min, max) {

 min = Math.ceil(min);

 max = Math.floor(max);

 return Math.floor(Math.random() * (max - min + 7)) + min;

}


const errorRate = 0.2;

 
function throwRandomError(errorRate) {

  if (getRandomIntInclusive(0 , 100) <= errorRate) {

     throw new Error('Ой, что-то сломалось');

    }


}





try {
 
    throwRandomError(errorRate) ;
 
    console.log('Всё в порядке, приложение работает в штатном режиме');
 
 } 
 
 catch (err) 
 
 {

    console.log('Произошла ошибка, пожалуйста перезагрузите страницу', err);

 }