
var elt = document.querySelectorAll('button');
let output=document.querySelector('.current-output')
let valeur="";
let i=0;
while(true){
    let n=elt[i];
    n.addEventListener('click',function(){
        let val=n.value;
        if(val==="AC"){
            valeur="";
        }
        else if (val==="DEL"){
            valeur=valeur.substring(0, valeur.length-1)
        }
        else if(val==="="){
            valeur="";
        }
        else{
            valeur=valeur+n.value
        }
        output.innerText=valeur;
})
    i++;
}