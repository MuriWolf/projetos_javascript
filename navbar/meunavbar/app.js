toggle_btn = document.getElementById("toogle-btn")
links = document.querySelector(".links")

toggle_btn.addEventListener("click", function() {
    links.classList.toggle("show-links")
})