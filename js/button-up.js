const btn_up = document.getElementById("btn_up")
btn_up.addEventListener('click' , () => {
    window.scrollTo(0,0)
});

window.onscroll = () => {
    if(window.scrollY < 300){
        btn_up.classList.remove("show")
    }else{
        btn_up.classList.add("show")
    }
    console.log(window.scrollY)
}