function conversion(degree){
    if (degree==="C°"){
        for(let i=1; i<9;i++){
            let numAndSym = document.getElementById("temp"+i);
            let num=parseInt(numAndSym.innerText.slice(0, -1)); //quito el simbolo al valor y lo vuelvo un int
            let tempCel = Math.round((num - 32) * (5/9));
            document.getElementById("temp"+i).innerText = tempCel+"°"
        }
    } else{
        for(let i=1; i<9;i++){
            let numAndSym = document.getElementById("temp"+i);
            let num=parseInt(numAndSym.innerText.slice(0, -1)); //quito el simbolo al valor y lo vuelvo un int
            let tempFar = Math.round((num * 1.8) + 32);
            document.getElementById("temp"+i).innerText = tempFar+"°"
        }
    }
}

function hideCookie(){
    document.getElementById("cookie").style.display="none";
}

function changeTemp(){
    let d = document.getElementById("mySelect").value;
    conversion(d);
}

