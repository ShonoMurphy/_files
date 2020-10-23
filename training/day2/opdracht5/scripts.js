function buttonPress(letter){
    var appenddata = document.getElementById('log');
    var logdata = document.getElementById('logdiv').textContent;
    var combine = 'knop ' + letter;
    var matchterm = new RegExp(combine, 'g');
    var include = logdata.includes(combine);
    var count = logdata.match(matchterm);
    if (include == true) {
        appenddata.insertAdjacentHTML('afterend', '<p>Je hebt op knop ' + letter + ' gedrukt</p>');
        alert('Je hebt al ' + count.length + ' keer op knop ' + letter + ' gedrukt!');
    } else {
        appenddata.insertAdjacentHTML('afterend', '<p>Je hebt op knop ' + letter + ' gedrukt</p>');
    }
}