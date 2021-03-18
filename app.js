const addInput1 = document.getElementById("add-input1");
const addInput2 = document.getElementById("add-input2");
const addButton = document.getElementById("add-button");
const addResult = document.getElementById("add-result");
const subInput1 = document.getElementById("sub-input1");
const subInput2 = document.getElementById("sub-input2");
const subButton = document.getElementById("sub-button");
const subResult = document.getElementById("sub-result");
const multInput1 = document.getElementById("mult-input1");
const multInput2 = document.getElementById("mult-input2");
const multButton = document.getElementById("mult-button");
const multResult = document.getElementById("mult-result");
const divInput1 = document.getElementById("div-input1");
const divInput2 = document.getElementById("div-input2");
const divButton = document.getElementById("div-button");
const divResult = document.getElementById("div-result");

addButton.addEventListener('click', () => {
    const addValue1 = addInput1.value;
    const addValue2 = addInput2.value;
    const result = Number(addValue1) + Number(addValue2);
    addResult.textContent = result;
})

subButton.addEventListener('click', () => {
    const subValue1 = subInput1.value;
    const subValue2 = subInput2.value;
    const result = Number(subValue1) - Number(subValue2);
    subResult.textContent = result;
})

multButton.addEventListener('click', () => {
    const multValue1 = multInput1.value;
    const multValue2 = multInput2.value;
    const result = Number(multValue1) * Number(multValue2);
    multResult.textContent = result;
})

divButton.addEventListener('click', () => {
    const divValue1 = divInput1.value;
    const divValue2 = divInput2.value;
    const result = Number(divValue1) / Number(divValue2);
    divResult.textContent = result;
})