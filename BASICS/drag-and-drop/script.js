let lists = document.getElementsByClassName("list");
let rightSpace = document.getElementById("right");
let leftSpace = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightSpace.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightSpace.addEventListener("drop", function (e) {
      rightSpace.appendChild(selected);
      selected = null;
    });
    leftSpace.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftSpace.addEventListener("drop", function (e) {
      leftSpace.appendChild(selected);
      selected = null;
    });
  });
}
