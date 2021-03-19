const addInput1 = document.getElementById("add-input1");
const addInput2 = document.getElementById("add-input2");
const addResult = document.getElementById("add-result");
const subInput1 = document.getElementById("sub-input1");
const subInput2 = document.getElementById("sub-input2");
const subResult = document.getElementById("sub-result");
const multInput1 = document.getElementById("mult-input1");
const multInput2 = document.getElementById("mult-input2");
const multResult = document.getElementById("mult-result");
const divInput1 = document.getElementById("div-input1");
const divInput2 = document.getElementById("div-input2");
const divResult = document.getElementById("div-result");

export function handleAddClick () {
    const addValue1 = addInput1.value;
    const addValue2 = addInput2.value;
    const result = Number(addValue1) + Number(addValue2);
    addResult.textContent = result;
}

export function handleSubClick () {
    const subValue1 = subInput1.value;
    const subValue2 = subInput2.value;
    const result = Number(subValue1) - Number(subValue2);
    subResult.textContent = result;
}

export function handleMultClick () {
    const multValue1 = multInput1.value;
    const multValue2 = multInput2.value;
    const result = Number(multValue1) * Number(multValue2);
    multResult.textContent = result;
}

export function handleDivClick () {
    const divValue1 = divInput1.value;
    const divValue2 = divInput2.value;
    const result = Number(divValue1) / Number(divValue2);
    divResult.textContent = result;
}



