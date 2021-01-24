import menu from '../menu.json';
import menuItems from '../templates/menu-items.hbs';
const markup = menuItems(menu);

console.log(markup);
console.log(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);