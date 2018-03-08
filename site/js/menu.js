function toggleMenu(){
    console.log("HELLO THEE YOU FOOL")
    var element = document.querySelector(".menu");
    element.classList.toggle("show");

    element = document.querySelector("main");
    element.classList.toggle("fade")
}