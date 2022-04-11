// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

nav_btn = document.querySelector(".nav-toggle")
links = document.querySelector(".links")

nav_btn.addEventListener("click", function() {
    links.classList.toggle("show-links")
    
    // if (links.classList.contains("show-links"))  {
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    // }
})