const inputBox=document.getElementById('input');
const list=document.getElementById('list');
const addTask= ()=>{
    if(inputBox.value===''){
        alert("You Must Write Something")

        
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        span.className = "close";
        li.appendChild(span);
    }
    inputBox.value='';


}
list.addEventListener("click",function(e){

    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);