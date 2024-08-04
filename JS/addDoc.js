document.querySelector(".add").addEventListener("click",function(){
    document.querySelector("form").classList.remove("adding");
    document.querySelector(".add").classList.add("hideButton");
    document.querySelector(".tab").classList.add("tabHide");
});

document.querySelector(".submit").addEventListener("click",function(){
    alert("Successfully Submitted");
    document.querySelector("form").classList.add("adding");
    document.querySelector(".add").classList.remove("hideButton");
    document.querySelector(".tab").classList.remove("tabHide");
});

