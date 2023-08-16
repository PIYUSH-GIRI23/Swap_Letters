let changeState = document.body.querySelector('#changeState')
let copyClip= document.body.querySelector('#copyClip')
let resetBtn= document.body.querySelector('#resetBtn')
let dibba= document.body.querySelector('.dibba')

changeState.addEventListener('click', function() {
    let randomInteger;
    let newValue = '';
    for (let i = 0; i < dibba.value.length; i++) {
        randomInteger = Math.floor(Math.random() * 2);
        if (randomInteger === 0) {
            newValue += dibba.value[i].toUpperCase();
        } else {
            newValue += dibba.value[i].toLowerCase();
        }
    }
    dibba.value = newValue;
});

copyClip.addEventListener('click', function() {
    navigator.clipboard.writeText(dibba.value)
})

resetBtn.addEventListener('click', function() {
    dibba.value = '';
})