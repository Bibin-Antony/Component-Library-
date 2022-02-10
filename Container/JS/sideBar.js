const menubtn = document.querySelector("#Menubtn");
const sideBar = document.querySelector("#Side-Bar");

menubtn.addEventListener("click", ()=> {
    console.log(sideBar.dataset.toggle ,sideBar.classList)
    if(sideBar.dataset.toggle === "1"){
        sideBar.classList.add("d-none")
        sideBar.classList.remove("d-flex")
        sideBar.dataset.toggle = "0"
    }else{
        sideBar.classList.add("d-flex")
        sideBar.classList.remove("d-none")
        sideBar.dataset.toggle = "1"
    }
});
