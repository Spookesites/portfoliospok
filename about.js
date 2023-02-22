const body = document.querySelector("body");
const btnKnow = body.querySelector(".btnKnow");
const btnClose = body.querySelector(".btnClose");

function openBody(){
    body.classList.add("open");
}

function closeBody(){
    body.classList.remove("open");
}

btnKnow.addEventListener("click", openBody);

btnClose.addEventListener("click", closeBody);
