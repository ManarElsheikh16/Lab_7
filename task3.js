
    document.getElementById("image").addEventListener("click",myFunction);
    var counter=0;
function myFunction(){
    counter++;
    alert(counter);
}
function removee(){
document.getElementById("image").removeEventListener("click",myFunction);
alert("game over");
}setTimeout(removee,5000);