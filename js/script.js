/*Conocimientos interactivos*/
function chbg(id, color) {
  document.getElementById(id).style.backgroundColor = color;
}

/*Navbar responsive*/
const listButton = document.querySelector('.mobile')
const listItems = document.querySelector('#list')

listButton.addEventListener("click", () => {
    listItems.classList.toggle("hidden")
    listButton.classList.toggle("mobilehidden")
})

listItems.addEventListener("click", () => {
    setTimeout(() => {
        listItems.classList.add("hidden")
        listButton.classList.toggle("mobilehidden")
    }, 150)
})