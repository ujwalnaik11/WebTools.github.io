var source = document.getElementById("u1");
var target = document.getElementById("u2");
var input = document.getElementById("input")
var result = document.getElementById("result")
var sourceType, targetType

var cl = document.getElementById("clear")
cl.addEventListener("click",clear);

function clear() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
}

function calculate() {
    sourceType = source.value;
    targetType = target.value;
    if(sourceType==="meter" && targetType==="kilometer"){
        result.value = input.value/1000;
    }else if(sourceType ==="meter" && targetType==="feet"){
        result.value = input.value*3.2808;
    }else if(sourceType ==="meter" && targetType==="meter"){
        result.value = input.value;
    }else if(sourceType ==="kilometer" && targetType==="meter"){
        result.value = input.value*1000;
    }else if(sourceType ==="kilometer" && targetType==="feet"){
        result.value = input.value*3280.8;
    }else if(sourceType ==="kilometer" && targetType==="kilometer"){
        result.value = input.value;
    }else if(sourceType ==="feet" && targetType==="meter"){
        result.value = input.value/3.2808;
    }else if(sourceType ==="feet" && targetType==="kilometer"){
        result.value = input.value/3280.8;
    }else if(sourceType ==="feet" && targetType==="feet"){
        result.value = input.value;
    }
         
}


