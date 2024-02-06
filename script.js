let add = document.getElementById('add');
let input = document.getElementById('task');
add.addEventListener('click', addclick);
task.addEventListener('keypress', function(e) {
    if(e.key==="Enter"){
        add.click();
    }
});
let i=1
function addclick(){
    let task = document.getElementById('task').value;
    if(task==''){
        console.log("Invalid Input");
        alert("Invalid Input");
        return false;
    }
    document.getElementById('task').value = '';
    let newdiv = document.createElement('div');
    newdiv.id=`t${i}`;
    newdiv.className="mcard";
    newdiv.innerHTML=`<input type="checkbox" class="cb">  <div class="card"> <h3>   ${task} </h3> </div>  <button id="x"> &#10007 </button>`;
    console.log(task);
    document.getElementById('show').appendChild(newdiv);
    i++;
    saveData();
}
document.getElementById('show').addEventListener('click', function(e){
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle("ck");
        // saveData();
    }
    else if(e.target.className === 'card'){
        e.target.parentElement.classList.toggle("ck");
        if(e.target.parentElement.children[0].checked === true){
            e.target.parentElement.children[0].checked = false;
        }
        else{
            e.target.parentElement.children[0].checked = true;
        }
        // saveData()
    }
    else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        // saveData();
    }
    if(e.target.parentElement.classList.contains('ck')){
        console.log("True")
        e.target.parentElement.parentElement.children[0].checked = true;

    }
    saveData();
})
function saveData(){
    localStorage.setItem("data", document.getElementById('show').innerHTML);
}
function display(){
    document.getElementById('show').innerHTML = localStorage.getItem("data");
}
display();