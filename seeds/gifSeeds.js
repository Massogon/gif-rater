const sequelize = require('../config/connection');
const GifPair = require('../models/GifPair');

const gifIds = [
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

const seedGifPairs = async () => {
  await sequelize.sync({ force: true });

  for (let i = 0; i < gifIds.length; i++) {
    for (let j = 0; j < gifIds.length; j++) {
      await GifPair.create({
        gif_id_1: gifIds[i],
        gif_id_2: gifIds[j],
        score: 0,
      });
    }
  }

  console.log('GIF pairs have been seeded!');
  process.exit(0);
};

seedGifPairs();