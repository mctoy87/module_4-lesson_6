' use strict';

        //Напишите функцию filter()
        // функция принимает в параметрах 2 массива
        // Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
        // Результат функции: массив из всех студентов, которые сдали экзамен.

    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];


    // 1ый способ 
    const passedExamStudents = allStudents.filter(el => failedStudents.includes(el) === false);
    console.log (passedExamStudents);

    //2ой способ
        const Arr = [];
        for (let i = 0; i < allStudents.length; i++) {
            if (failedStudents.includes(allStudents[i]) !== true) {
                Arr.push(allStudents[i]);
            };
        };
        console.log(Arr);



    //3й способ (комбинайия второго с функцией)
    const filter = (allStudents, failedStudents) => {        
    
        const Arr = [];
        for (let i = 0; i < allStudents.length; i++) {
            if (failedStudents.includes(allStudents[i]) !== true) {
                Arr.push(allStudents[i]);
            };
        };
        return Arr;
    }
    console.log(filter(allStudents, failedStudents));