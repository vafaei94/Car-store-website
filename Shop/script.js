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

function calTotal() {
  var huracan = document.getElementById("h-model").value;
  var aventador = document.getElementById("a-model").value;
  var revuelto = document.getElementById("r-model").value;
  var shippingState = state.value;
  var shippingMethod = document.querySelector("[name=r-method]:checked").value;

  var totalQTY = huracan + aventador + revuelto,
    shippingCostPer,
    shippingCost,
    estimate,
    totalItemPrice = 199 * huracan + 290 * aventador + 790 * revuelto;
  if (shippingState === "CA") {
    totalItemPrice *= 1.075;
  }
  if (shippingState === "NY") {
    totalItemPrice *= 1.09;
  } else {
    totalItemPrice *= 1;
  }
  switch (shippingMethod) {
    case "carrier":
      shippingCostPer = 10;
      break;
    case "ship":
      shippingCostPer = 100;
      break;
    default:
      shippingCostPer = 0;
  }
  estimate = "$ " + (shippingCostPer + totalItemPrice).toFixed(3) + " Thousand";
  document.getElementById("txt-estimate").value = estimate;

  //Result
  var result = document.getElementById("result");
  result.innerHTML = "Thank you for your purchase";
}
