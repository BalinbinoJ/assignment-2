/*
  Name: Justice Tolentino
  Date: 09.27.2026
  CSC 372-01

  This is the script.js page for my event handling assignment. This is where I will give my event cards the ability
  to be saved at the bottom of the home page.
*/

"use strict";

function save(event){
const img = event.currentTarget;
const btn = img.querySelector('button');
img.classList.toggle('saved');
btn.classList.toggle('btnSaved');
var eventInfor = img.querySelector('p.card-object');
var eventClone = eventInfor.cloneNode(true);
var field = document.querySelector('#eventField');
field.classList.remove("fieldGuy");
field.classList.add("somethingSaved");
field.appendChild(eventClone);
}



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