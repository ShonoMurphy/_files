function buttonPress(){
    var value1 = document.getElementById("textinput1").value;
    lowervalue = value1.toLowerCase();
    console.log(lowervalue);
    if (lowervalue == "hallo") {
        alert("Welkom!")
    } else if (lowervalue == "doei") {
        alert("Tot ziens!")
    } else {
        alert("Verkeerde input!")
    }

}
