//Adding the HTML Tree Generator Extension
//console.dir(directory) - how to see all nodes within a document
const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function(){
    const cost = document.querySelector('input');
    let tip = (cost.value * .15).toFixed(2);
    let temp = `<h1>You should tip $${tip} on $${cost.value} </h1>`;
    output.innerHTML = temp;
});