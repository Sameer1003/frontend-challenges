const submit = document.querySelector("#submit");
// const dismiss = document.querySelector("#dismiss-btn");

function validator(email){
    const emailValue = email.value;
    let i = 0;

    let emailUser = "";
    while(i<emailValue.length && emailValue[i]!='@'){
        emailUser+=emailValue[i];
        i++;
    }
    if(emailUser==="" || i==emailValue.length){
        // means there is no username before @ or there is no @
        return false;
    }
    if(i<emailValue.length && emailValue[i]=='@') i++;
    let company = "";
    while(i<emailValue.length && emailValue[i]!='.'){
        company+=emailValue[i];
        i++;
    }
    if(company==="" || i==emailValue.length){
        // means there is no company before .com or there is no .com
        return false
    }

    const temp = emailValue.slice(-4); // Last 4 characters
    if (temp !== ".com") return false;

    return true;
};

function submitHandler(e){
    e.preventDefault();
    const email = document.querySelector("#email");
    if(validator(email)){
        location.href="./successPage.html";
    } else{
        const invalidMsg = document.querySelector("#invalid-msg");
        invalidMsg.style.display = "flex";
        email.style.border = "2px solid var(--red)"
    }
};

document.querySelector("#email").addEventListener('click', ()=>{
    const invalidMsg = document.querySelector("#invalid-msg");
    invalidMsg.style.display = "none";
    document.querySelector("#email").style.border = "none"
});

submit.addEventListener('click', submitHandler);

/*
function dismissHandler(e){
    e.preventDefault();
    location.href="./index.html";
}
dismiss.addEventListener('click', dismissHandler);
*/