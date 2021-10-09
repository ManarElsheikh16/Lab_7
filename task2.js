var c=0;
var z=0;
function clock(){
    var t=new Date();

    document.getElementById("div1").value=t.getHours()%12+" : "+t.getMinutes()+" : "+c;
    c++;
    if(c===60){
        c=0;
    }
}
function start(e){
    t=setInterval(clock,1000);
    if(e.key==="q"){
        clearInterval(t);
        alert("clock stopped");
    }
}