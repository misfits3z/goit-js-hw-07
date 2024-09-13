const ulElement = document.querySelector('#categories');
const listItem = Array.from(ulElement.children);

console.log('Number of categories:'+ listItem.length);

listItem.forEach(item => {
    console.log('Category: ' + item.querySelector('h2').textContent);
    console.log('Elements: ' + item.querySelectorAll('li').length);
});