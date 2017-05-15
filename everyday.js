var adding = document.getElementById('addBtn');
var thisname = document.getElementById('myInput');
var ULlist = document.getElementById('myUL');
var clearbtn = document.getElementById('clear');

var names = [];

var rr = function addR() {
    if (myInput.value.length > 0) {

        var list = document.createElement("li");
        var inName = document.createTextNode(thisname.value)
        list.appendChild(inName);

        document.getElementById("display").appendChild(list);
        thisname.value = '';
    }

};
adding.addEventListener("click", rr);
clearbtn.addEventListener('click', function() {
    window.location.reload();
});
