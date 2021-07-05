let adding = document.getElementById('addBtn');
let thisname = document.getElementById('myInput');
let displaying = document.getElementById('display');
let clearbtn = document.getElementById('clear');

let names = [];

let rr = function addR() {
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
