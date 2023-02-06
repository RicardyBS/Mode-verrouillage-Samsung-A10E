var div=document.querySelectorAll(".range div"),mdp=document.getElementById("motDePasse"),enter=document.getElementById("enter"),del=document.getElementById("del"),zero=document.getElementById("zero"),
  text=document.getElementById("textGeneral"),
  erreur=document.getElementById("erreur");

/*event*/
zero.onclick=recup
function recup(e){
  text.style.display="none"
  erreur.style.display="none"
  
  var chif=e.currentTarget.firstElementChild.textContent;
  mdp.value+=chif;

}

for (var n=div.length,i=0;i<n;i++){
  div[i].addEventListener("click",recup,true)
}

enter.onclick=function (){
 if ( mdp.value!=="515534" && text.style.display=="none"){
    erreur.style.display="block"
 }
 else if ( mdp.value=="515534" ){
    alert("Votre mdp est correct")
 }
}

del.onclick=function(){
  mdp.value=mdp.value.substring(0,mdp.value.length-1)
}

/*animation*/
setTimeout(function(){
 text.style.display="none"
},7000)
