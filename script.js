
/*function save(event){
const img = event.currentTarget;
img.classList.remove('card-container');
img.classList.add('saved');
img.removeEventListener('click', save);
img.addEventListener('click', unsave);
var saveButton = img.querySelector('button');
saveButton.textContent = "Remove";
var eventInfor = img.querySelector('p.card-object');
var eventClone = eventInfor.cloneNode(true);
var field = document.querySelector('#eventField');
field.classList.remove("fieldGuy");
field.classList.add("somethingSaved");
    field.appendChild(eventClone);
}*/

function save(event){
const img = event.currentTarget;
const btn = img.querySelector('button');
img.classList.toggle('saved');
btn.classList.toggle('btnSaved');
/*
var eventInfor = img.querySelector('p.card-object');
var eventClone = eventInfor.cloneNode(true);
var field = document.querySelector('#eventField');
field.classList.remove("fieldGuy");
field.classList.add("somethingSaved");
field.appendChild(eventClone);
*/
}

/*function addEvent(event){
const img = event.currentTarget;
var eventInfor = img.querySelector('p.card-object');
var eventClone = eventInfor.cloneNode(true);
var field = document.querySelector('div.fieldGuy');
if(img.className == 'saved'){
    field.appendChild(eventClone);
}
else{
    field.removeChild(eventClone);
}
}
*/

/*
function unsave(event){
    const img = event.currentTarget;
    img.classList.remove('saved');
    img.classList.add('card-container');
    img.removeEventListener('click', unsave);
    img.addEventListener('click', save);
    var saveButton = img.querySelector('button');
    saveButton.textContent = "Save";
    field.removeChild(eventClone);
    var field = document.querySelector('div.fieldGuy');
field.classList.add("fieldGuy");
field.classList.remove("somethingSaved");
}
*/


function addButton(event){
for (let index = 0; index < cardArray.length; index++) {
const card = cardArray [index];
var bttn = document.createElement("button");
bttn.className = "btnYup"; 
    card.appendChild(bttn);
}

}


function addField(event){
    var field = document.createElement("div");
    field.id = "eventField";
    field.className = "fieldGuy";
    /*
    field.classList.add('nothingSaved');
    field.style.padding = "50px";
    field.style.background = " rgb(126, 24, 24)";
    field.style.margin = "5px"
    */
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
  //element.addEventListener('click', addEvent);
}