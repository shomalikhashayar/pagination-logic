let li = document.querySelector(".pagination-list").getElementsByTagName("li");
let pagiantionNumber = document.querySelector(".pagination-numbers");
let display = 10;
let count = 1;
let buttonCount = Math.ceil(li.length / display);
// console.log(buttonCount);

for (let i = 1; i <= buttonCount; i++) {
  let button = document.createElement("button");
  button.innerHTML = i;
  pagiantionNumber.append(button);
}

document.querySelector("#prev-button").addEventListener("click", prev);
document.querySelector("#next-button").addEventListener("click", next);

document.querySelector("#prev-button").setAttribute("disabled", true);

function main(pageNum) {
  let nextPage = display * pageNum;
  let prevPage = display * (pageNum - 1);
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = "none";
    if (i < nextPage && i >= prevPage) {
      li[i].style.display = "block";
    }
  }
}

main(1);

let buttonNumbers = pagiantionNumber.getElementsByTagName("button");
for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i].addEventListener("click", buttonClick);
}

buttonNumbers[count - 1].classList.add("active");

function buttonClick() {
  // alert()
  buttonNumbers[count - 1].classList.remove("active");
  // console.log(this.innerHTML);
  if (this.innerHTML == buttonCount) {
    document.querySelector("#next-button").setAttribute("disabled", true);
    document.querySelector("#prev-button").removeAttribute("disabled");
  } else if (this.innerHTML == 1) {
    document.querySelector("#next-button").removeAttribute("disabled");
    document.querySelector("#prev-button").setAttribute("disabled", true);
  } else {
    document.querySelector("#prev-button").removeAttribute("disabled");
    document.querySelector("#next-button").removeAttribute("disabled");
  }

  count = this.innerHTML;
  main(count);
  this.classList.add("active");
}

function next() {
  document.querySelector("#prev-button").removeAttribute("disabled");
  if (count !== buttonCount) {
    buttonNumbers[count - 1].classList.remove("active");
    buttonNumbers[count].classList.add("active");
    count++;
  }

  if (count == buttonCount) {
    document.querySelector("#next-button").setAttribute("disabled", true);
  }

  main(count);
}

function prev() {
  buttonNumbers[count - 1].classList.remove("active");
  buttonNumbers[count - 2].classList.add("active");
  document.querySelector("#next-button").removeAttribute("disabled");
  if (count !== 1) {
    count--;
  }
  if (count === 1) {
    document.querySelector("#prev-button").setAttribute("disabled", true);
  }

  main(count);
}
