/*
const card = document.querySelector("div.card-container");
card.addEventListener('click', addBorders);
*/
function save(event){
const img = event.currentTarget;
img.classList.remove('card-container');
img.classList.add('saved');
img.removeEventListener('click', save);
img.addEventListener('click', unsave);
var saveButton = img.querySelector('button');
saveButton.textContent = "Remove";
}

function unsave(event){
    const img = event.currentTarget;
    img.classList.remove('saved');
    img.classList.add('card-container');
    img.removeEventListener('click', unsave);
    img.addEventListener('click', save);
    var saveButton = img.querySelector('button');
    saveButton.textContent = "Save";
}

function addButton(event){
for (let index = 0; index < cardArray.length; index++) {
const card = cardArray [index];
var bttn = document.createElement("button");
    bttn.textContent = "Save"; 
    card.appendChild(bttn);
}

}


function addField(event){
    var field = document.createElement("div");
    field.className = "nothingSaved";
    document.body.appendChild(field);
}



const cardArray = document.querySelectorAll('div.card-container');


window.addEventListener('load', (event)=>{
    addButton();
    addField();
});


for (let index = 0; index < cardArray.length; index++) {
  const element = cardArray [index];
  element.addEventListener('click', save);
}
