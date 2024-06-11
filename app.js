const openBtn = document.querySelector(".open-btn");
const CloseBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
})

CloseBtn.addEventListener("click", () =>{
    modalContainer.classList.remove("show")
})