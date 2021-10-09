var name1=location.search;
var name2=name1.split("&");
var name3=name2[0].split("=");
document.write(("welcome"+" "+name3[1]).bold().fontsize(5).fontcolor("red"));
