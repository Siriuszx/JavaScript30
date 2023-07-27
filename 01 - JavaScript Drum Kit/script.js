window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key='${e.code}']`);
    const curKey = document.querySelector(`.key[data-key='${e.code}']`);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
        curKey.classList.add('playing');
    }
})

function removeTransition(e) {
    if(e.propertyName === 'transform' && e)
        this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');  //pseudoarray (node-list)
keys.forEach(key => {key.addEventListener('transitionend', removeTransition)});

