var btnEl=document.querySelectorAll("button");
var inputEl=document.querySelector("input");

for( let i=0;i<btnEl.length;i++){
    btnEl[i].addEventListener("click",function(){
        var btnValue=btnEl[i].textContent;
        if(btnValue==="C"){
            clearResult();
        }
        else if(btnValue==="="){
            calculateResult();
        }
        else if(btnValue==="D"){
            deleteLast();
        }
        else{
            appendValue(btnValue);
        }
    });
}

document.addEventListener("keydown", function(event){
    var keyValue=event.key;
    if(key=isFinite(event.key)|| keyValue==="+"||keyValue==="/45"||keyValue==="*"||keyValue==="-"||keyValue==="."){
        appendValue(keyValue);
    }
    else{
        if(keyValue==="C" || keyValue==="c"){
            clearResult();
        }
        else if(keyValue==="Enter" || keyValue==="="){
            if(inputEl.value){
                calculateResult();
            }
            else{
                alert("Please enter a valid expression");
            }
        }
        else if(keyValue==="Backspace"){
            deleteLast();
        }
    }
    
})

function deleteLast(){
    inputEl.value=inputEl.value.substring(0,inputEl.value.length-1);
}

function appendValue(btnValue){
    inputEl.value +=btnValue;
}

function calculateResult(){
    var res=eval(inputEl.value);
    inputEl.value=res;
}
function clearResult(){
    inputEl.value="";
}