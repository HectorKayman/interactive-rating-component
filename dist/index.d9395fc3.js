// Cards
const e=document.querySelector("#main-card"),t=document.querySelector("#success-card"),n=document.querySelector("#ratings"),c=document.querySelector("button"),s=document.querySelector("#rated");// Stores selected rating
let r=0;// Resets previously selected rating
const i=function(){n.querySelectorAll("span").forEach(e=>{e.classList.add("bg-medium-grey"),e.classList.remove("bg-normal-grey"),e.classList.remove("text-white")})},o=function(e){let t=["one","two","three","four","five"];t.includes(e.target.id)&&(// Unselects a previously selected rating
i(),// Selects the currently clicked rating
e.target.classList.remove("bg-medium-grey"),e.target.classList.add("bg-normal-grey"),e.target.classList.add("text-white"),// Stores the rating into a variable
r=t.indexOf(e.target.id)+1)},d=function(){e.classList.toggle("hidden"),t.classList.toggle("hidden")};// Event listener for ratings
n.addEventListener("click",function(e){// Call the function to select the clicked rating
o(e)}),// Event listener for submit button
c.addEventListener("click",function(e){e.preventDefault(),0!==r&&(// Update rating span on success card
s.textContent=r,// Call the function for swapping cards
d())}),// Event listener for escape key when success card is visible
document.addEventListener("keydown",function(e){t.classList.contains("hidden")||"Escape"!==e.key||(i(),d())});//# sourceMappingURL=index.d9395fc3.js.map

//# sourceMappingURL=index.d9395fc3.js.map
