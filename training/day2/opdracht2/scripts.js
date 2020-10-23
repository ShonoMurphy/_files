function buttonPress(){
    var input = document.getElementById("textinput1").value;
    var inputlower = input.toLowerCase();
    var ecount = 0;
    for (var i = 0; i < inputlower.length ; i++ )
        if (inputlower[i] == "e") {
            ecount++;
        }
    if (ecount > 0) {
        alert("Deze input bevat een 'e'")
    } else {
        alert("Deze input bevat geen 'e'")
    }
}
