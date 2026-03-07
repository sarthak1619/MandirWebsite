// Select langugae options
function changeLang(){
let lang=document.getElementById("langu").value;
if(lang){
window.location.href=lang;

}
}

// cards moving
  const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
isPressedDown = true;
cursorXSpace = e.offsetX - cards.offsetLeft;
container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
if (!isPressedDown) return;
e.preventDefault();
cards.style.left = `${e.offsetX - cursorXSpace}px`;
boundCards();
});

function boundCards() {
const container_rect = container.getBoundingClientRect();
const cards_rect = cards.getBoundingClientRect();

if (parseInt(cards.style.left) > 0) {
cards.style.left = 0;
} else if (cards_rect.right < container_rect.right) {
cards.style.left = `-${cards_rect.width - container_rect.width}px`;
}
}
// Menu and menu-box


function opened() {
document.getElementById("menus-box").style.display="block";
document.getElementById("open").style.display="none";
document.getElementById("close").style.display="block";
document.getElementById("donation").style.display="block";
}

function closed() {
document.getElementById("menus-box").style.display="none";
document.getElementById("open").style.display="block";
document.getElementById("close").style.display="none";


}