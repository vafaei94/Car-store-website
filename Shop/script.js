var state = document.getElementById("s-state");
var btn = document.getElementById("btn-estimate");
document.addEventListener("DOMContentLoaded", function () {
  btn.disabled = true;
});
state.addEventListener("change", function () {
  if (state.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});
