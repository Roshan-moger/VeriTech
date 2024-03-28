const inputBox= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask(){
    if( inputBox.value ===''){
        alert("You must write Something!")
    }
    else{
        let lis= document.createElement('li');
        lis.innerHTML=inputBox.value;
        listContainer.appendChild(lis)
        let span= document.createElement('span');
        span.innerHTML="\u00d7"
        lis.appendChild(span)
    }
    inputBox.value ='';
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}