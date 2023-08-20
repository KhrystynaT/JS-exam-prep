// change the count-el in the html to reflect the new count
let count = 0;
function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;

  console.log(count);
}
