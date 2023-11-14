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
function filterAnagrams(anagramWord:string, arr:string[]):string[] {

  for (const num of arr) {
      if (num.length !== anagramWord.length) {
          return;
      } else {
  
      }
  }
  }

  