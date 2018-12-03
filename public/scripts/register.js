function submitListener() {
  if(test.text == undefined){
    window.alert("fuck you");
  }
  else{
    window.alert("test");
  }

}

document.addEventListener("DOMContentLoaded", function(event) {
  let button = document.getElementById("form_submit");
  let test = document.getElementById("userid");
  console.log(button);
  console.log(test.text);
  button.addEventListener("click", submitListener);
});
