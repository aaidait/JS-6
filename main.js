// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let array = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < array.length; i++) {
//     result += array[i]; 
//   }
  
// console.log(result); 



// 2) Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let numbers = [-3, -2, -1, 0, 1, 2, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     sum += numbers[i];
//   }
// }

// console.log(sum); 



// 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент 
// со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let array = [1, 2, 5, 9, 4, 13, 4, 10];
// let num = false; 

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 4) {
//     num = true; 
//     break; 
//   }
// }
// if (num) {
//   console.log('Есть');
// } else {
//   console.log('Нет');
// }




// 4) Дан массив с элементами ['Привет, ', 'мир', '!']. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.

// let array = ['Привет, ', 'мир', '!'];
// let text = array[0] + array[1] + array[2];
// console.log(text);



// 5) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];
// let array = arr1.concat(arr2);
// console.log(array); 



// 6) Дан массив ['a', 'b', 'c']. Добавьте ему в начало элементы 1, 2, 3. И отдельно добавьте в конец массива 1,2,3

// let array = ['a', 'b', 'c'];
// array.unshift(1, 2, 3);
// array.push(1, 2, 3);
// console.log(array);



// 7) Создайте массив ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

// let array = ['a', 'b', 'c', 'd'];
// let result = array[0]+ '+' + array[1] + ' , ' + array[2] + '+' + array[3];
// console.log(result);


// 8) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let array = [1, 2, 3, 4, 5];
// let array2 = array.slice(0, 3);
// console.log(array2)



// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);



// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let array = [1, 2, 3, 4, 5]; 
// array.splice(1, 0, 'a', 'b');
// array.splice(6, 0, 'c', 'e');
// console.log(array);



// 11) Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и отдельно последний элемент. Используйте shift, pop

let array = ['js', 'css', 'jq'];
let first = array.shift();
let last = array.pop();

console.log(first);
console.log(last);

