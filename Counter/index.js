// change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;

  console.log(count);
}

// create a function, save(), which logs out the count when its called
function save() {
  let entry = count + "-";
  saveEl.innerText += entry;

  console.log(count);
}
