// #1 суммировать
const multiply = (numOne: number, numTwo: number) => numOne * numTwo; 

console.log(multiply(2, 2)); // 4



// #2 повторить строку
function repeat(text: string, count: number):string {
  let resultStr:string = '';

  for (let i:number = 0; i < count; i++) {
    resultStr += text;
  }

  return resultStr;

}

console.log(repeat('aboba', 2)); // 'abobaaboba'


// #3 зашифровать № карты
function getHiddenCard(cardNumber: number, starCount:number = 4):string {
  const star:string = '*';
  const cardNumberTail = String(cardNumber).substring(String(cardNumber).length - 4);


return star.repeat(starCount) + cardNumberTail;
}

console.log(getHiddenCard('1234567812345678', 2)); // "**5678"
console.log(getHiddenCard('1234567812345678', 3)); // "***5678"

// # 4 вернуть чётные
const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers(arrOfNums:number[]):number[] {
    const getEven = (num:number): boolean => num % 2 === 0;
    const resultArr = arrOfNums.filter(getEven);

    return resultArr;
}

console.log(getEvenNumbers(numbers));


// # 5 найти анаграммы
function filterAnagrams(anagramWord: string, anagrams: string[]): string[] {
  const standard:string = anagramWord.split('').sort().join('');

  return anagrams.filter((item:string) => item.split('').sort().join('') === standard);
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer'])); // []


// # 6 если в курсе меньше 4 уроков то false, иначе true
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};

const isComplete = (course: {name: string, lessons: string[]}):boolean => course.lessons.length > 3 ? true : false;


console.log(isComplete(course)); // false

// # 7 Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно

enum ModalStatus {
  Opened,
  Closed,
}

interface ObjectModal {
  text: string;
  status: number;
}

function buildModal(modalText: string, modalStatus: number): ObjectModal {
  return {text: modalText, status: modalStatus};
}


const modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal);
// # 8


// # 9



// # 10


// # 11


// # 12


// # 13


// # 14


// # 15


// # 16


// # 17


// # 18


// # 19


// # 20


// # 21


// # 22


// # 23


// # 24


// # 25


// # 26


// # 27


// # 28


// # 29


// # 30


// # 31


// # 32


// # 33


// # 34


// # 35


// # 36


// # 37


// # 38


// # 39


// # 40


// # 41


// # 42


// # 43


// # 44


// # 45


// # 46


// # 47


// # 48


// # 49


// # 50


// # 51


// # 52


// # 53