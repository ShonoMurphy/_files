function buttonPress(letter){
    var appenddata = document.getElementById('log');
    appenddata.insertAdjacentHTML('afterend', '<p>Je hebt op knop ' + letter + ' gedrukt</p>')
}