var F = document.getElementById("f");
var C = document.getElementById("c");
var K = document.getElementById("k");

var Fbtn = document.getElementById("fb");
Fbtn.addEventListener("click",calculate_f);
var Cbtn = document.getElementById("cb");
Cbtn.addEventListener("click",calculate_c);
var Kbtn = document.getElementById("kb");
Kbtn.addEventListener("click",calculate_k);

var cl = document.getElementById("clear")
cl.addEventListener("click",clear);

function clear() {
    F.value = "";
    C.value = "";
    K.value = "";
}

function calculate_f() {
       var tmp = F.value;
       C.value = (tmp - 32) * 5/9;
       K.value = (tmp - 32) * 5/9 + 273.15;
}

function calculate_c() {
    var tmp = C.value;
    F.value = tmp*(9/5) + 32;
    K.value = tmp + 273.15;
}

function calculate_k() {
    var tmp = K.value;
    C.value = tmp - 273.15;
    F.value = (tmp - 273.15) * 9/5 + 32 ;
}


