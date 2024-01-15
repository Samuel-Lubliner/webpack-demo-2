function createContactPage() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const headline = document.createElement('h2');
    headline.textContent = 'Contact Us';
    contact.appendChild(headline);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: 123-456-7890';
    contact.appendChild(phoneNumber);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Food Street, Flavor Town';
    contact.appendChild(address);

    return contact;
}

export default createContactPage;
