//***************************************************
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let array=[1,2,4,5,1];
console.log(array)
let array1=['fsdf','dfsdf','qqqqq','fdfsfs','dfdddddd'];
console.log(array1)
let array2=['qqqqqq','wwwwwww','sssssss','ffffffff','gggggggg',1,5555,34434,9999,320,true,false,true,false,false]
console.log(array2)
//***************************************************
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArray=[];
emptyArray[0]=2;
emptyArray[1]='dlskd';
console.log(emptyArray)
console.log(emptyArray[1])
//***************************************************

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numberArray=[2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i=0;
while(i<numberArray.length){
    console.log(numberArray[i]);
    i++;
}
//     2. перебрати його циклом for
console.log("перебрати його циклом for");
for(let i=0;i<numberArray.length;i++){
    console.log(numberArray[i])
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log("3. перебрати циклом while та вивести  числа тільки з непарним індексом");
i=1;
while(i<numberArray.length){
    console.log(numberArray[i])
    i+=2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("4. перебрати циклом for та вивести  числа тільки з непарним індексом");
for(let i=1;i<numberArray.length;i+=2){
    console.log(numberArray[i]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log("5. перебрати циклом while та вивести  числа тільки парні  значення");
i=0;
while(i<numberArray.length){
    console.log(numberArray[i])
    i+=2;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("6. перебрати циклом for та вивести  числа тільки парні  значення");
for(let i=0;i<numberArray.length;i+=2){
    console.log(numberArray[i]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log(`7. замінити кожне число кратне 3 на слово "okten"`);
for(let i=0;i<numberArray.length;i++){
    if(!!(i%3)===false && i>=3){
        numberArray[i]='okten';
    }
    console.log(numberArray[i])
}
// 8. вивести масив в зворотньому порядку.
console.log("8. вивести масив в зворотньому порядку.")
let reversed=numberArray.reverse();
for(let i=0;i<numberArray.length;i++){
    console.log(reversed[i])
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//***************************************************

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numArray=[2,1,65,323,999,777,2312,11,75,8];
console.log("Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.")
for(let i=0;i<numArray.length;i++){
    console.log(numArray[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.")
let boolArray=['2','f','gg','hi','fdsffdsf','asdsaa','oooo','pppp','popopopop','wpwpwp'];
for(let i=0;i<boolArray.length;i++){
    console.log(boolArray[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.")
let anyArray=[1,555,'2222',true,'Sobaka',false,false,3232323232,'dsdsd','wawaaa'];
for(let i=0;i<anyArray.length;i++){
    console.log(anyArray[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи")
let tenAnyArray=[1,2,3,4,5,6,7,8,9,'fd','dssd','ssss','dfg','gfgf','fefef','wwwww','ggggg','ooooo','wqwqqw',true,false,
    true,true,false,false,false,true,false,true];
for(let i=0;i<tenAnyArray.length;i++){
    if(typeof tenAnyArray[i]==="boolean"){
        console.log(tenAnyArray[i])
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи")
for(let i=0;i<tenAnyArray.length;i++){
    if(typeof tenAnyArray[i]==="number"){
        console.log(tenAnyArray[i])
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи")
for(let i=0;i<tenAnyArray.length;i++){
    if(typeof tenAnyArray[i]==="string"){
        console.log(tenAnyArray[i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
// Вивести в консоль всі його елементи в циклі.
console.log(`Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
 Вивести в консоль всі його елементи в циклі.`)
let arrayEmpty=[];
arrayEmpty[0]=1;
arrayEmpty[1]=true;
arrayEmpty[2]=false;
arrayEmpty[3]='string';
arrayEmpty[4]=524;
arrayEmpty[5]=true;
arrayEmpty[6]='word';
arrayEmpty[7]=21121;
arrayEmpty[8]='dfdsfdsf';
arrayEmpty[9]=true;
for(let i=0;i<arrayEmpty.length;i++){
    console.log(arrayEmpty[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write")
for(let i=0;i<10;i++){
    console.log(i);
    document.write(`<div>${i}</div>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log("Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write")
document.write("Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write")
for(let i=1;i<100;i++){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log("Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write")
document.write("Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write")
for(let i=2;i<100;i+=2){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log("Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write")
document.write("Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write")
for(let i=0;i<100;i+=2){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log("Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write")
document.write(`Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write`)
for(let i=1;i<100;i+=2){
    console.log(i)
    document.write(`<div>${i}</div>`)
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books=[
    {
        title:'Book1',
        number_of_pages:320,
        author:['Person1','Person2'],
        genre:['Horror']
    },
    {
        title:'It',
        number_of_pages: 500,
        author: ['Stephen King'],
        genre: ['Comedy']
    },
    {
        title: 'Western Book',
        number_of_pages: 243,
        author: ['not known'],
        genre: ['Western']
    },
    {
        title: 'Big Book',
        number_of_pages: 3222,
        author: ['John Johnson'],
        genre: ['Horror','Drama']
    }
]

// -знайти наібльшу книжку.
console.log("знайти наібльшу книжку")
// let max = books.reduce((acc, curr) => acc.number_of_pages > curr.number_of_pages ? acc : curr);//// ПЕРШИЙ СПОСІБ
// console.log(max.number_of_pages)
let maxPage=books[0];
    for(let book of books){
        if(book.number_of_pages>maxPage.number_of_pages){
            maxPage=book;
        }
    }
console.log(maxPage.number_of_pages)
// - знайти книжку/ки з найбільшою кількістю жанрів
console.log("знайти книжку/ки з найбільшою кількістю жанрів")
for(let book of books){
    if(book.genre.length>1){
        console.log(book.genre);
    }
}
// - знайти книжку/ки з найдовшою назвою
console.log("знайти книжку/ки з найдовшою назвою")
let longString=books[0];
for(let book of books){
    if(book.title.length>longString.title.length){
        longString=book;
    }
}
console.log(longString.title);
// - знайти книжку/ки які писали 2 автори
console.log("знайти книжку/ки які писали 2 автори")
for(let book of books){
    if(book.author.length>1){
        console.log(book.author)
    }
}
// - знайти книжку/ки які писав 1 автор
console.log("знайти книжку/ки які писав 1 автор")
for(let book of books){
    if(book.author.length<2){
        console.log(book.author)
    }
}
