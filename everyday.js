var adding = document.getElementById('addBtn');
var thisname = document.getElementById('myInput');
var displaying = document.getElementById('display');
var clearbtn = document.getElementById('clear');

var names = [];

var rr = function addR() {
    if (myInput.value.length > 0) {

        var list = document.createElement("li");
        console.log(thisname.value);
        list.innerHTML = "<label><input type='checkbox'>"+thisname.value+"</label>";
        console.log(list);
        

        document.querySelector("#display").appendChild(list);
        thisname.value = '';

}


};
// displaying.addEventListener("click", rr);
adding.addEventListener("click", rr);
clearbtn.addEventListener('click', function() {
    window.location.reload();
});
