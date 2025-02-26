const btn = document.getElementById("mainbtn");
const btn2 = document.getElementById("setter");
const orgSCope = 225;
const orgSCope2 = 150;
const orgMBW = 40;
const orgMBH = 15;
let horizont = 400;
let vertic = 400;
let scopes1 = 225;
let scopes2 = 150;
let rand = 0;
let rand2 = 0;
let settingsVar = 1; // foryou
let mainbtnW = 40;
let mainbtnH = 15;
let inp11;
let inp22;

btn.addEventListener("click", f1);
btn2.addEventListener("click", sets);

function f1() {
    rand = (Math.floor(Math.random() * scopes1))+1;
    rand2 = (Math.floor(Math.random() * scopes2))+1;
    horizont = rand;
    vertic = rand2;
    f2();
}

function f2() {
    btn.style.left = horizont + "px";
    btn.style.top = vertic + "px";
}

function sets() {
    inp11 = document.getElementById("inp1").value;
    settingsVar = inp11;
    mainbtnH = orgMBH* settingsVar;
    mainbtnW = orgMBW*settingsVar;
    btn.style.width = mainbtnW + "px";
    btn.style.height = mainbtnH + "px";
    inp22 = document.getElementById("scp").value;
    scopes1 = orgSCope*inp22;
    scopes2 = orgSCope2*inp22;
}