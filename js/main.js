let arr = [{}]*25;
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = ['Иван', 'Игнат', 'Ибрагим', 'Анна', 'Алиса', 'Александр', 'Дмитрий'];
for (let i = 0; i< 25; i++){
  arr[i] = {
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Good picture',
    likes: Math.floor(Math.random() * 176) + 15,
    comments: []
  };
  for (let j = 0; j<Math.floor(Math.random() * 30); j++){
    arr[i.comments[j]] = {
      id: toString(i)+toString(j),
      avatar: `img/avatar--${Math.floor(Math.random() * 5)+1}.svg`,
      message:messages[Math.floor(Math.random() * 6)],
      name:names[Math.floor(Math.random() * 7)]
    };
  }
}
