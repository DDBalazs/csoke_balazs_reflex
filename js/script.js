let myInterval;     // időzítő
let speed=1000;     // ezredmásodperc
let time_limit=10;  // játékidő másodpercben
let time;           // hátralévő másodperc

var randomgomb = 0;
var tippek = 0;
var valasztasok = 0;

document.getElementById('fel').style.backgroundColor = "gray";
document.getElementById('le').style.backgroundColor = "gray";
document.getElementById('bal').style.backgroundColor = "gray";
document.getElementById('jobb').style.backgroundColor = "gray";

function time_start () {
    time=time_limit;
    myInterval=setInterval('tiktak()',speed);
}
function tiktak(){
    randomgomb =  Math.floor(Math.random() * 4);
    document.getElementById("display").innerHTML=time+" mp";
    if (time==0)
    {
        document.getElementById('ujjatek').disabled = "false";
        document.getElementById('ujjatek').style.opacity = "1";
        time_stop();
    }
    else{
        if(randomgomb == 0){
            document.getElementById('fel').style.backgroundColor = "red";
            
        }
        else if(randomgomb == 1){
            document.getElementById('bal').style.backgroundColor = "red";
        }
        else if(randomgomb == 2){
            document.getElementById('le').style.backgroundColor = "red";
        }
        else{
            document.getElementById('jobb').style.backgroundColor = "red";
        }
        time--;
        document.getElementById("ujjatek").style.opacity = "0.5";
        document.getElementById('ujjatek').disabled = "true";
    } 
}
function time_stop(){
    clearInterval(myInterval);
}

function fel(){
    if(randomgomb == 0){
        tippek++;
        document.getElementById('fel').style.backgroundColor = "gray";
        document.getAnimations('pontszam').innerHTML = tippek;
    }
}
function bal(){
    if(randomgomb == 1){
        tippek++;
        document.getElementById('bal').style.backgroundColor = "gray";
        document.getAnimations('pontszam').innerHTML = tippek;
    }
}
function le(){
    if(randomgomb == 2){
        tippek++;
        document.getElementById('le').style.backgroundColor = "gray";
        document.getAnimations('pontszam').innerHTML = tippek;
    }
}
function jobb(){
    if(randomgomb == 3){
        tippek++;
        document.getElementById('jobb').style.backgroundColor = "gray";
        document.getAnimations('pontszam').innerHTML = tippek;
    }
}