const pass_field = document.querySelector(".pass-key");
const showbtn = document.querySelector(".show");
showbtn.addEventListener("click",function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showbtn.textContent = "HIDE";
        showbtn.style.color = "#3498bd"
    }else{
        pass_field.type = "password";
        showbtn.textContent = "SHOW";
        showbtn.style.color = "#222 "
    }
})

 
