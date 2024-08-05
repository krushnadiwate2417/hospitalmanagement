
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
        var Reggg = document.querySelector("input#RegNo");
        var Regg = Reggg.value;
        var displaying = new Display(Regg);
        console.log(displaying);
        
        function Display(Reg,name,special,deg,contact,address){
            this.Reg = Reg;
            this.name = name;
            this.special = special;
            this.deg = deg;
            this.contact = contact;
            this.address = address;
        }
    });


document.querySelector(".logout").addEventListener("click", function(){
    window.location.href = "/adminLogin/adminLogin.html";
});

document.querySelector(".back").addEventListener("click",function(){
    window.location.href = "./adminPage.html";
});
