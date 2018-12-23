window.onload=wwww();
function moveMassage1(){
   var elem=document.getElementById("box");
   var xpos=parseInt(elem.style.top);
   /*if(xpos==-1152)return true;
   if(xpos>-1152)xpos--;
   if(xpos<-1152)xpos++;
   elem.style.top=xpos="px";*/
   elem.style.top="-288px";
}
function moveMassage2(){
    var elem=document.getElementById("box");
    elem.style.top="-576px";
 }
 function moveMassage3(){
    var elem=document.getElementById("box");
    elem.style.top="-864px";
 }
 function moveMassage4(){
    var elem=document.getElementById("box");
    elem.style.top="-1152px";
 }
function wwww(){
    var elem=document.getElementById("box");
    var xpos=parseInt(elem.style.top);
   movement=setTimeout("moveMassage1()",1000);
   movement=setTimeout("moveMassage2()",2000);
   movement=setTimeout("moveMassage3()",3000);
   movement=setTimeout("moveMassage4()",4000);
}
