// js accordion



accordion = document.querySelectorAll(".accordion");
accordionArr = Array.from(accordion);
accordionArr.map((item) =>{
    item.addEventListener("click", function(){
       item.classList.toggle("active");
       let panel = item.nextElementSibling;
       if(panel.style.display === "block"){
        panel.style.display = "none";
       }
       else{
        panel.style.display = "block";
       }

    })
})



