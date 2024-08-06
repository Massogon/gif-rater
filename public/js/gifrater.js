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
    document.getElementById('gif1').dataset.num = `${gifIds1}`;
    document.getElementById('gif2').dataset.num = `${gifIds2}`;
}

const incrementScore = async (gif_id_1, gif_id_2) => {
    const response = await fetch('/incrementScore', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gif_id_1, gif_id_2 }),
    });

    if (response.ok) {
        console.log('Score incremented successfully');
    } else {
        const result = await response.json();
        console.error('Error incrementing score:', result.message);
    }
};
  

async function getScore(gifId1, gifId2) {
    try {
        const response = await fetch('http://localhost:3001/getScore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gif_id_1: gifId1, gif_id_2: gifId2 }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Score:', data.score);
            return data.score; // Return the score so it can be used elsewhere
        } else {
            const errorData = await response.json();
            console.error('Failed to fetch score:', errorData.message);
            return null;
        }
    } catch (error) {
        console.error('Error fetching score:', error);
        return null;
    }
}


const displayScore1 = async () => {
    incrementScore(`${gifIds1}`, `${gifIds2}`);
    const score1Value = await getScore(gifIds1, gifIds2);
    const score2Value = await getScore(gifIds2, gifIds1);

    const score1 = document.getElementById('score1');
    let score1Text = document.createTextNode(score1Value + 1);
    score1.appendChild(score1Text);

    const score2 = document.getElementById('score2');
    let score2Text = document.createTextNode(score2Value);
    score2.appendChild(score2Text);

    document.getElementById('gif1').removeEventListener('click', displayScore1);
    document.getElementById('gif2').removeEventListener('click', displayScore2);
};

const displayScore2 = async () => {
    incrementScore(`${gifIds2}`, `${gifIds1}`);
    console.log(gifIds1, gifIds2)
    const score1Value = await getScore(gifIds1, gifIds2);
    const score2Value = await getScore(gifIds2, gifIds1);

    const score1 = document.getElementById('score1');
    let score1Text = document.createTextNode(score1Value);
    score1.appendChild(score1Text);

    const score2 = document.getElementById('score2');
    let score2Text = document.createTextNode(score2Value + 1);
    score2.appendChild(score2Text);
    
    document.getElementById('gif2').removeEventListener('click', displayScore2);
    document.getElementById('gif1').removeEventListener('click', displayScore1);
};

document.addEventListener('DOMContentLoaded', () => {
    displayGifs();

    document.getElementById('gif1').addEventListener('click', displayScore1);

    document.getElementById('gif2').addEventListener('click', displayScore2);
});