document.querySelector("button").addEventListener("click",check);

function check(){
    const inp = document.getElementById("username");
    const final = inp.value;
    

    const pas = document.getElementById("pass");
    const final2 = pas.value;

    if(final === "admin" && final2 === "admin"){
        alert("!! SUCCESS !!  Will Redirect to another page." );
        window.location.href = "adminPage.html";
    } else{
        alert("Invalid Credentials");
    };
}
