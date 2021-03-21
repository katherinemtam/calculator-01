import { handleAddClick, handleSubClick, handleMultClick, handleDivClick, handleEverythingClick } from './handler.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
const calculateButton = document.getElementById('calculate-button');

addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
multButton.addEventListener('click', handleMultClick);
divButton.addEventListener('click', handleDivClick);
calculateButton.addEventListener('click', handleEverythingClick);