/*Conocimientos interactivos*/
function chbg(id, color) {
  document.getElementById(id).style.backgroundColor = color;
}

/*Navbar responsive*/
const listButton = document.querySelector('.mobile')
const listItems = document.querySelector('#list')

listButton.addEventListener("click", () => {
    listItems.classList.toggle("hidden")
})

listItems.addEventListener("click", () => {
    setTimeout(() => {
        listItems.classList.add("hidden")
    }, 150)
})