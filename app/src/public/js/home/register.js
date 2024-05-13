"use strict";



const id = document.querySelector("#id"),
    email = document.querySelector("#email"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("please enter ID");
    else if (!email.value) return alert("please enter email");
    else if (!psword.value) return alert("please enter password");
    else if (!confirmPsword.value) return alert("please enter password-confirm");
    else if(psword.value !== confirmPsword.value) return alert("password in two fields are not same.");
    
    else{
        const req = {
            id: id.value,
            email: email.value,
            psword: psword.value,
        };
        
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success){
                location.href = "/login";
            } else {
                alert(res.msg);
            }
          })
          .catch((err) =>{
            console.error(new Error("register error"))
          });
    }
    
};