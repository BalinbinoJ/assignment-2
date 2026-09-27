
function save(event){
const img = event.currentTarget;
img.classList.remove('card-container');
img.classList.add('saved');
img.removeEventListener('click', save);
img.addEventListener('click', unsave);
var saveButton = img.querySelector('button');
saveButton.textContent = "Remove";
}

function addEvent(event){
const img = event.currentTarget;
var eventInfor = img.querySelector('p.card-object');
var eventClone = eventInfor.cloneNode(true);
var field = document.querySelector('div.fieldGuy');
field.appendChild(eventClone);
img.removeEventListener('click', addEvent);
}

function unsave(event){
    const img = event.currentTarget;
    img.classList.remove('saved');
    img.classList.add('card-container');
    img.removeEventListener('click', unsave);
    img.addEventListener('click', save);
    var saveButton = img.querySelector('button');
    saveButton.textContent = "Save";
    field.removeChild(eventClone);
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
    field.className = "fieldGuy";
    field.textContent = "Nothing saved yet."
    field.style.padding = "50px";
    field.style.background = " rgb(126, 24, 24)";
    field.style.margin = "5px"
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
  element.addEventListener('click', addEvent);
}