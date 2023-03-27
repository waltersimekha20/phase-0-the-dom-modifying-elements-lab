// Write your code here!

const mainNode = document.getElementById('main');
mainNode.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// const newHeader = document.createElement('h1');
// newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';