var adding = document.getElementById('addBtn');
var thisname = document.getElementById('myInput');
//var mylist = document.getElementById('list');


//adding.addEventListener("click", function(){
//console.log('me')
//});

var rr = function addR(){
  if ( myInput.value.length > 0) {
  //output.innerHTML= input.value;

  var list = document.createElement("li");
  var inName = document.createTextNode(thisname.value)
//console.log(thisname);
  // li.textcontent = text;

  list.innerHTML = thisname.value
  document.getElementById("display").appendChild(list);
  thisname.value = '';

}
};



adding.addEventListener("click", rr);
