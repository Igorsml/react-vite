// # 2 суммировать
const multiply = (numOne: number, numTwo: number) => numOne * numTwo;

console.log(multiply(2, 2)); // 4



// # 3 повторить строку
function repeat(text: string, count: number): string {
  let resultStr: string = '';

  for (let i: number = 0; i < count; i++) {
    resultStr += text;
  }

  return resultStr;

}

console.log(repeat('aboba', 2)); // 'abobaaboba'


// # 4 зашифровать № карты
function getHiddenCard(cardNumber: number, starCount: number = 4): string {
  const star: string = '*';
  const cardNumberTail = String(cardNumber).substring(String(cardNumber).length - 4);


  return star.repeat(starCount) + cardNumberTail;
}

console.log(getHiddenCard('1234567812345678', 2)); // "**5678"
console.log(getHiddenCard('1234567812345678', 3)); // "***5678"

// # 5 вернуть чётные
const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

function getEvenNumbers(arrOfNums: number[]): number[] {
  const getEven = (num: number): boolean => num % 2 === 0;
  const resultArr = arrOfNums.filter(getEven);

  return resultArr;
}

console.log(getEvenNumbers(numbers));


// # 6 найти анаграммы
function filterAnagrams(anagramWord: string, anagrams: string[]): string[] {
  const standard: string = anagramWord.split('').sort().join('');

  return anagrams.filter((item: string) => item.split('').sort().join('') === standard);
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer'])); // []


// # 7 если в курсе меньше 4 уроков то false, иначе true
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};

const isComplete = (course: { name: string, lessons: string[] }): boolean => course.lessons.length > 3 ? true : false;


console.log(isComplete(course)); // false

// # 8 Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
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
  return { text: modalText, status: modalStatus };
}


const modal = buildModal('abobus forever', ModalStatus.Opened);
console.log(modal);


// # 9
type User = {
  name: string,
  age: number,
}

function getOlderUser(user1: User, user2: User) {
  if (user1.age === user2.age) return null;

  return user1.age > user2.age ? user1 : user2;
}

const user1 = { name: 'Axe', age: 8 };
const user2 = { name: 'Exa', age: 8 };

console.log(getOlderUser(user1, user2));


// # 10
function getParams(queryStr: string): object {
  const resultObj: any = {};

  return queryStr.split('&').reduce((acc, query) => {
    const [key, value] = query.split('=');
    acc[key] = value;
    return acc;
  }, resultObj);
}

console.log(getParams('per=10&page=5')); // { per: '10', page: '5' }

// # 11 Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail(). Функция принимает почту и домен. Если емейл пользователя содержит указанный домен, то функция возвращает true
namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    const tailEmail: string = email.split('@').slice(-1)[0];
    // или email.endsWith(`@${domain}`);

    return tailEmail === domain;
  }
}

type User = {
  email: string
};

function authorize(user: User | null): boolean {
  const companyDomain = 'hexlet.io';
  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}


// # 12 Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат. Последний будет использоваться для проверки каждого числа на соответствие требованиям:
type filterFun = (num: number) => boolean;

function filter(arrOfNumbers: number[], callback: filterFun): number[] {
  const result = arrOfNumbers.filter(callback);

  return result;
}

const numbers = [1, -5, 2, 3, 4, 133];

console.log(filter(numbers, (n) => n > 3)); // [4, 133]
console.log(filter(numbers, (n) => n % 2 == 0)); // [2, 4]


// # 13 map
type mapCallback = (num: number, index: number) => number;

function map(numbers: number[], callback: mapCallback): number[] {
  const result = numbers.map(callback);
  return result;
}

console.log(map([3, 9], (n) => n - 3)); // [0, 6]


// # 14 forEach
type forEachCb = (num: number, index: number) => void;

function forEach(arrOfNumbers: number[], callback: forEachCb): void {
  return arrOfNumbers.forEach(callback);
}

forEach([8, 9], (n, index) => console.log(index + n)); // 9, 10



// # 15 Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно.
function fail(): never {
  throw new Error('Aboba');
}


// # 16 Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. Эта функция считает, что массив не объект:
function isPlainObject(value: unknown): boolean {
  return Object.getPrototypeOf(value) === Object.prototype;
}

console.log(isPlainObject(1)); // false
console.log(isPlainObject('hexlet')); // false
console.log(isPlainObject({})); // true
console.log(isPlainObject({ name: 'code-basics' })); // true
console.log(isPlainObject([1, 8])); // false

// # 17
function lessonsCount({ lessons }: { lessons: string[] }): number {
  return lessons.length;
}

const course = { lessons: ['intro', 'lala'] };

console.log(lessonsCount(course)); // Output: 2

// # 18 Rest и Spread
function max(numOne: number, ...numbers: number[]): number {
  return Math.max(numOne, ...numbers)
}

console.log(max(1, 2, 3)); // 3
console.log(max(234)); // 234



// # 19 Перегрузка функций (Function Overloads)
type Overload = {
  (name: string): string;
  (name: string, year?: unknown): string;
}

const newYearCongratulate: Overload = (arg1, arg2?) => {
  if (typeof arg1 === 'string') {
    return `Hi ${arg1}! Happy New Year!`;
  }
  return `Hi ${arg2}! Happy New Year ${arg1}!`;
}

// или 
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(data1: string | number, data2?: string): string {
  if (typeof data1 === 'number') {
    return `Hi ${data2}! Happy New Year ${data1}!`;
  }

  return `Hi ${data1}! Happy New Year!`;
}


// # 20 Реализуйте функцию last(), которая извлекает последний элемент из переданного значения. Значением может быть строка или число. Функция возвращает значение того же типа, которое было передано в качестве параметра:
function last(value: string | number): string | number {
  if (typeof value === "string") {
    return value.slice(-1)
  }

  return Number(String(value).slice(-1));
}

// Функция возвращает строку
console.log(last('aboba')); // a

// Функция возвращает число
console.log(last(12345)); // 5


// # 21 Реализуйте функцию unique(), которая убирает дубликаты из массива. Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.
function unique(value: Array<string | number>): (number | string)[] {
  return Array.from(new Set(value));
}

console.log(unique([9, 9, 3, 8, 8])); // [9, 3, 8]
console.log(unique(['twinkle', 'twinkle', 'little', 'bat'])); // ['twinkle', 'little', 'bat']
console.log(unique([1, 1, 3, 'oops!'])); // [1, 3, 'oops!']

// или
function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    init,
  );
}


// # 22 Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов. Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.
function getField(value: number) {
  const result: null[][] = [];
  let counter: number = value;

  for (let i = 0; i <= counter; i++) {
    for (let j = 0; j <= counter; j++) {
      result.push(new Array(value).fill(null, 0, value));
      counter--;
    }
  }

  return result;
}

// или 
function getField(size: number): null[][] {
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}

const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]


// # 23 Реализуйте функцию reverse(), которая переворачивает массив. Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке. Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().
function reverse(arrOfNumbers: readonly number[]): number [] {
  const result: number[] = [];

  for (let i = arrOfNumbers.length - 1; i >= 0; i--) {
      result.push(arrOfNumbers[i])
  }

  return result;
}

console.log(reverse([1, 2, 8])); // [8, 2, 1]
console.log(reverse([10, 33, 7, 0])); // [0, 7, 33, 10]

// или
function reverse(coll: readonly number[]): number[] {
  return coll.map((_, index) => coll[coll.length - 1 - index]);
}


// # 24 Создайте и экспортируйте тип Point, который описывает точку в пространстве, состоящую из трех координат: x, y, z.

// Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение. Две точки совпадают, если совпадают все их координаты:

type Point = [number, number, number];

function isTheSamePoint(point1: Point, point2: Point): boolean {
    let sumPoint1:number = 0;
    let sumPoint2:number = 0;
    
    point1.forEach((value) => sumPoint1 += value);
    point2.forEach((value) => sumPoint2 += value);

    return sumPoint1 === sumPoint2;
}

// или
function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1.every((el, i) => el === p2[i]);
}

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

console.log(isTheSamePoint(p1, p2)); // true
console.log(isTheSamePoint(p1, p3)); // false
console.log(isTheSamePoint(p2, p3)); // false

// # 25 Определите тип CustomType, который может принимать следующие значения: null, undefined, number
type CustomType = null | undefined | number;



// # 26 Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.
type AllowedToLastIndex = string | number | null;

function lastIndex(str: AllowedToLastIndex, char: AllowedToLastIndex): AllowedToLastIndex {
    if (str === null || typeof str === 'number') {
        return null; 
    }

    const arrayFromString: string[] = str.split('');

    let result: number | null = null;

    for (let i = arrayFromString.length - 1; i >= 0; i--) {
        if (char === arrayFromString[i]) {
            result = i;
            break;
        }
    }

    return result;
}

// или
function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}

const str = 'test';
console.log(lastIndex(str, 't')); // 3
console.log(lastIndex(str, 'p')); // null



// # 27 Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой. Если пришел null или undefined должна вернуться '$0.00'.
function formatPrice(price?: number | null): string {
  if (price !== null && price !== undefined) {
      return '$' + price.toFixed(2);
  }

  return '$0.00';
}

// # 28 Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед-назад по одномерному массиву фиксированного размера с пятью элементами. Если черепашка выходит за пределы массива, то выбрасывается исключение.

type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Turtle[];
};

const startGame = (): Game => {
  const state: Turtle[] = ['turtle', null, null, null, null];

  const makeTurn = (direction: 'left' | 'right') => {
    if (
      (direction === 'left' && typeof state[0] === 'string') ||
      (direction === 'right' && typeof state[state.length - 1] === 'string')
    ) {
      throw new Error('Invalid turn');
    }

    if (direction === 'right') {
      for (let i = state.length - 1; i >= 0; i--) {
        if (i === state.length - 1) {
          state[i] = null;
        } else {
          state[i + 1] = state[i];
          state[i] = null;
        }
      }
    }

    if (direction === 'left') {
      for (let i = 0; i < state.length; i++) {
        if (i === 0 && typeof state[i] === 'string') {
          state[i] = null;
          break;
        }
        if (typeof state[i] === 'string' && state[i - 1] === null) {
          state[i - 1] = state[i];
          state[i] = null;
        }
      }
    }
  };

  return { makeTurn, state };
};

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]
// makeTurn('left') // ERROR - Invalid turn

// или 
const makeTurn = (direction: 'left' | 'right'): void => {
  const turtleIndex = state.indexOf('turtle');
  const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

  if (nextIndex < 0 || nextIndex > state.length) {
    throw new Error('Out of bounds');
  }

  state[turtleIndex] = null;
  state[nextIndex] = 'turtle';
};

makeTurn('right');
makeTurn('right');
makeTurn('right');
makeTurn('right');

makeTurn('left');
makeTurn('left');

console.log(state); // [null, null, 'turtle', null, null]



// # 29 Реализуйте тип Admin, который является пересечением типов AdminPermission и User. Реализуйте функцию addAdmin(), которая принимает значение с типом User и возвращает значение с типом Admin. В качестве значения для свойства permission должно быть значение Permission.READ.
enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string;
};

type AdminPermission = {
  permission: Permission;
};

type Admin = AdminPermission & User;

function addAdmin(user: User): Admin {
  return {
    login: user.login,
    permission: Permission.READ,
  };
}

const user: User = { login: 'login1' };
const admin = addAdmin(user);
console.log(admin); // { login: 'login1', permission: Permission.READ }


// # 30 Реализуйте объект по описанному типу Form. Поле name.value должно проходить валидацию, а поле age — нет.
console.clear()

type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  age: {
    value: 23,
    validator: (val: number) => val > 25,
  },
  name: {
    value: "Igor",
    validator: (val: string) => val.length >= 3,
  }
};


console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false


// # 31
// Реализуйте функцию getUserFriends(userResponseJSON, userId), которая принимает на вход JSON-строку и userId пользователя. JSON содержит массив пользователей users и с массив друзей friends в виде пар [userId, userId]. Функция возвращает список друзей пользователя по переданному userId`.
// Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

type UserResponse = {
  users: User[],
  friends: Friends[]
};

function getUserFriends (userJson: string, userID: number): Array<User> | [] {
  const usersObj:UserResponse = JSON.parse(userJson);
  const user = usersObj.users.find(user => user.id === userID);

  if (!user) return [];
  
 const userFriendsID = usersObj.friends
    .filter(friends => friends[0] === userID || friends[1] === userID)
    .map(friends => friends[0] === userID ? friends[1] : friends[0]);

  const friendsList = usersObj.users.filter(user => userFriendsID.includes(user.id));

  return friendsList;

}

const userJson = JSON.stringify({
    users: [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Mary', age: 21 },
      { id: 3, name: 'Peter', age: 22 },
      { id: 4, name: 'Ann', age: 23 },
    ],
    friends: [
      [1, 2],
      [1, 3],
      [3, 2],
    ]
});


console.log(getUserFriends(userJson, 1)); // [{ id: 2, name: 'Mary', age: 21 }, { id: 3, name: 'Peter', age: 22 }]
console.log(getUserFriends(userJson, 2)); // [{ id: 1, name: 'John', age: 20 }, { id: 3, name: 'Peter', age: 22 }]
console.log(getUserFriends(userJson, 3)); // [{ id: 1, name: 'John', age: 20 }, { id: 2, name: 'Mary', age: 21 }]
console.log(getUserFriends(userJson, 10)); // []

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
