// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const albums = [
  {
    title: "Hybrid Theory",
    artist: "Linkin Park",
    year: "2000",
  },
  {
    title: "Mer de Noms",
    artist: "A Perfect Circle",
    year: "2000",
  },
  {
    title: "American Idiot",
    artist: "Green Day",
    year: "2004",
  },
];

const musicCollection = {
  albums: [...albums],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return { value: this.albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let cooks = new Map();
cooks.set("Pizza Margarita", "Viktor");
cooks.set("Pizza Pepperoni", "Viktor");
cooks.set("Sushi Filadelfia", "Olga");
cooks.set("Sushi Kalifornia", "Olga");
cooks.set("Desert Tiramisu", "Dmitriy");
cooks.set("Desert Cheesecake", "Dmitriy");

let clients = new Map();

let aleksey = {name: "Aleksey"};
let alekseyOrder = new Set();
alekseyOrder.add("Pizza Pepperoni");
alekseyOrder.add("Desert Tiramisu");

let maria = {name: "Maria"};
let mariaOrder = new Set();
mariaOrder.add("Sushi Kalifornia");
mariaOrder.add("Pizza Margarita");

let irina = {name: "Irina"};
let irinaOrder = new Set();
irinaOrder.add("Desert Cheesecake");

clients.set(aleksey, alekseyOrder);
clients.set(maria, mariaOrder);
clients.set(irina, irinaOrder);

console.log(`Pizza Pepperoni cooked: ${cooks.get("Pizza Pepperoni")}`);
console.log(`Aleksey order: ${[...clients.get(aleksey)]}`);
console.log(`Irina order: ${[...clients.get(irina)]}`);