import createHomepage from './homepage';
import createContactPage from './contact';
import createMenuPage from './menu';

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    createHomepage();
});

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function setupTabs() {
    const tabsContainer = document.getElementById('tabs');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    // Create and append tabs
    tabs.appendChild(createTab('Home', createHomepage));
    tabs.appendChild(createTab('Contact', createContactPage));
    tabs.appendChild(createTab('Menu', createMenuPage));

    tabsContainer.appendChild(tabs);
}

function createTab(text, tabContentFunction) {
    const tab = document.createElement('button');
    tab.textContent = text;
    tab.addEventListener('click', () => {
        clearContent();
        const content = document.getElementById('content');
        content.appendChild(tabContentFunction());
    });
    return tab;
}
