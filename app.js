const btnShare = document.querySelector(".btn-share")
const contentShare = document.querySelector(".share")
btnShare.addEventListener("click", () => {
    if (contentShare.classList.contains("off")) {
        contentShare.classList.remove("off")
    } else {
        contentShare.classList.add("off")
    }
})