let ulLi = document.getElementsByTagName("li");
for(let i=0; i < ulLi.length;i++){ 
    let close = document.createElement("span");
    close.textContent = "\u00D7";
    close.classList.add("close");
    close.onclick = removeBtn;
    ulLi[i].append(close);
    ulLi[i].onclick = checkList;
}
let buton = document.querySelector("#liveToastBtn");
buton.addEventListener('click', added)
function checkList(){
  this.classList.toggle("checked");
}
function removeBtn(){
  this.parentElement.remove();
}
let list = document.querySelector("#list");
let task = document.querySelector("#task"); 
function added() {
    if (task.value == ""){
      $(".error").toast("show");
    }else {
      $(".success").toast("show");
      let liDOM = document.createElement('li');
      list.appendChild(liDOM);
      liDOM.innerHTML = task.value;
      task.value = "";
      liDOM.onclick = checkList;
      let close = document.createElement("span");
      close.textContent = "\u00D7";
      close.classList.add("close");
      close.onclick = removeBtn; 
      liDOM.append(close);
      list.append(liDOM);
      inputElement.value = ("");
    }
}