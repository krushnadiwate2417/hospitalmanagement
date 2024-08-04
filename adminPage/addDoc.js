
document.querySelector(".add").addEventListener("click",function(){
    document.querySelector("form").classList.remove("hiding");
    document.querySelector(".add").classList.add("hideButton");
    document.querySelector(".tab").classList.add("tabHide");
});

document.querySelector(".submit").addEventListener("click",function(){
    alert("Successfully Submitted");
    document.querySelector("form").classList.add("hiding");
    document.querySelector(".add").classList.remove("hideButton");
    document.querySelector(".tab").classList.remove("tabHide");
});


document.querySelector(".logout").addEventListener("click", function(){
    window.location.href = "/adminLogin/adminLogin.html";
});

document.querySelector(".back").addEventListener("click",function(){
    window.location.href = "./adminPage.html";
});
