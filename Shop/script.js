document.getElementById("btn-estimate").addEventListener("click", calTotoal);

function calTotoal() {
var state = document.getElementById("s-state");
  if(state.value ===''){
    alert("Please choose your state");
    state.focus;
  }
}
