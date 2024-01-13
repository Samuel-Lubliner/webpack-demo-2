function createHomepage() {
    const content = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome this is the sample h1";
    content.appendChild(headline);

    const image = new Image();
    image.src = 'southern_viscacha.jpg';
    content.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "Here is some sample content";
    content.appendChild(description);
}

export default createHomepage;
