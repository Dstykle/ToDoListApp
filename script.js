//initializing variables for html ids
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

//function to create a new task and add it to the list of tasks
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}
//if the click cam from the item then it will toggle to checked
//or if it came from the span then it is the remove button
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
