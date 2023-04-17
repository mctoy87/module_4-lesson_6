'use strict';

        //Напишите функцию addPrefix 
        // Функция получает массив в виде параметров и возвращает массив с префиксами
        // После префикса пробел добавляется автоматически 

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const mister = 'Mr ';
const addPrefix = (names, prefix) => {
    const addPrefix = names.map(item=> prefix + item );
    return addPrefix;

    // for (i=0; i < names.length; i++) {
    //     names
    // }
}
   console.log (addPrefix(names, mister));