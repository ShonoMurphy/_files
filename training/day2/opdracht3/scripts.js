function buttonPress(){
    var input1 = document.getElementById("textinput1").value;
    var input1lower = input1.toLowerCase();
    var input2 = document.getElementById("textinput2").value;
    var input2lower = input2.toLowerCase();
    var inputcount = 0;
    for (var i = 0; i < input1lower.length ; i++ )
        if (input1lower[i] == input2lower) {
            inputcount++;
        }
    if (input2lower.length > 1) {
        alert ("Invoer is meer dan 1 letter");
    } else if (inputcount > 0) {
        alert("'" + input2lower + "' " + "komt " + inputcount + " keer in het eerste veld voor")
    } else {
        alert("'" + input2lower + "' komt niet in het eerste veld voor");
    }
}
