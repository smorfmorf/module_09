// Создание объекта корзины
const cart = {
    items: [], // Массив товаров
    totalPrice: 0, // Общая стоимость корзины
    count: 0, // Количество товаров

    // Метод для получения общей стоимости товаров
    getTotalPrice() {
        return this.totalPrice;
    },

    // Метод для пересчета стоимости всей корзины
    calculateItemPrice() {
        this.totalPrice = this.items.reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    },

    // Метод для увеличения количества товаров
    increaseCount(num) {
        this.count += num;
    },

    // Метод для добавления товара
    add(name, price, quantity = 1) {
        const item = {
            name: name,
            price: price,
            quantity: quantity,
        };

        this.items.push(item);
        this.increaseCount(quantity);
        this.calculateItemPrice();
    },

    // Метод для очистки корзины
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    // Метод для вывода информации о корзине
    print: function () {
        console.log(JSON.stringify(this.items));
        console.log("Общая стоимость корзины: " + this.totalPrice);
    },
};

// Пример использования
cart.add("Товар 1", 10, 2);
cart.add("Товар 2", 5, 3);
cart.add("Товар 3", 8);
cart.print();
