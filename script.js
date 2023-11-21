class Computer {
    constructor(model, manufacturer, price) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const computers = [
        new Computer('Ноутбук Lenovo', 'Lenovo', 35000),
        new Computer('ПК HP Pavilion', 'HP', 28000),
        new Computer('Моноблок Dell', 'Dell', 42000),
        new Computer('Ноутбук ASUS VivoBook', 'ASUS', 30000),
        new Computer('ПК Acer Aspire', 'Acer', 25000),
        new Computer('Ноутбук Apple MacBook Air', 'Apple', 90000),
        new Computer('ПК MSI Infinite', 'MSI', 55000),
        new Computer('Моноблок LG', 'LG', 48000),
        new Computer('Ноутбук Samsung Galaxy Book', 'Samsung', 40000),
        new Computer('ПК Lenovo Legion', 'Lenovo', 60000),
    ];

    const showComputersButton = document.querySelector('.btn');
    showComputersButton.addEventListener('click', function () {
        displayComputers(computers);
    });

    function displayComputers(computers) {
        const programDiv = document.querySelector('.program');

        const table = document.createElement('table');
        table.id = 'computerTable';

        const headerRow = table.insertRow();
        const headers = ['Модель', 'Виробник', 'Ціна'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            const text = document.createTextNode(headerText);
            th.appendChild(text);
            headerRow.appendChild(th);
        });

        // Додаємо дані
        computers.forEach(computer => {
            const row = table.insertRow();
            const values = [computer.model, computer.manufacturer, `₴${computer.price.toLocaleString()}`];
            values.forEach(value => {
                const cell = row.insertCell();
                const text = document.createTextNode(value);
                cell.appendChild(text);
            });
        });

        programDiv.appendChild(table);
    }
});