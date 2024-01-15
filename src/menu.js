function createMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const headline = document.createElement('h2');
    headline.textContent = 'Our Menu';
    menu.appendChild(headline);

    const item1 = document.createElement('p');
    item1.textContent = 'Pizza';
    menu.appendChild(item1);

    const item2 = document.createElement('p');
    item2.textContent = 'Pasta';
    menu.appendChild(item2);

    return menu;
}

export default createMenuPage;
