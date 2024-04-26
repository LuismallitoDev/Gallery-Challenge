const images = document.querySelectorAll(".photo");

images.forEach(img=>{

    img.addEventListener("click", ()=>{
        img.classList.toggle("active")
    })
})