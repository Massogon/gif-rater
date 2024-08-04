let gifIds = [
    'lkibHaGO1xmJXapEdq',
    'FIyOndr9jvel8vTHLH',
    '2zoFg7OGkcS82CPK44',
    't7tGsalcWtUvNSpQ9V',
    'XpFcYeXZbRWeob95oI',
    'Ri7d8I18cto2jufOKc',
    'd1Jfp6LimgUTxK7K',
    'l2SqcQYL2wj3LJD68',
    'QLBcA1iilFLESNkmRE',
    'yvBAuESRTsETqNFlEl',
    'MDJ9IbxxvDUQM',
    'vySkPlXaNO0ElMIkeo',
    '13CoXDiaCcCoyk',
    'tBxyh2hbwMiqc',
    'n1DLWakwn2Zji',
    'JIX9t2j0ZTN9S',
    'xTiTnfkt9wCx4fuWhW',
    'C9x8gX02SnMIoAClXa',
    'Is0AJv4CEj9hm',
    'Ib6HtcZMKdPHaBj1R2'
]

let randomNumber = Math.floor(Math.random() * (gifIds.length))
console.log(randomNumber)
const gifIds1 = gifIds[randomNumber];

gifIds[randomNumber] = gifIds[gifIds.length - 1];

randomNumber = Math.floor(Math.random() * (gifIds.length - 1))
console.log(randomNumber)
const gifIds2 = gifIds[randomNumber];

function displayGifs() {
    document.getElementById('gif1').src = `https://media.giphy.com/media/${gifIds1}/giphy.gif`;
    document.getElementById('gif2').src = `https://media.giphy.com/media/${gifIds2}/giphy.gif`;
}

document.addEventListener('DOMContentLoaded', () => {
    displayGifs();
});