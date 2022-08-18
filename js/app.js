// for c button
function deleteMe() {
  document.getElementById("input-field").value = "";
}

// for all button
function calculator(newValue) {
  document.getElementById("input-field").value += newValue;
}

// for result
function answer() {
  let previousValue = document.getElementById("input-field").value;
  let newValue = eval(previousValue);
  document.getElementById("input-field").value = newValue;
}
