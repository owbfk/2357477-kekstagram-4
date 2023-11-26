import {messages} from '/js/data.js';
import {names} from '/js/data.js';
import {descriptions} from '/js/data.js';

const createComment = function(id){
  return {
    id: id,
    avatar: `img/avatar--${Math.floor(Math.random() * 5)+1}.svg`,
    message: messages[Math.floor(Math.random() * messages.length)],
    name: names[Math.floor(Math.random() * names.length)]
  };
};

const createPhoto = function(id){
  let comments = [];
  for (let i = 0; i < Math.floor(Math.random() * 30); i++){
    comments[i] = createComment(Math.floor(Math.random() * 9999999999));
  }
  return {
    id: id,
    url: `photos/${id+1}.jpg`,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    likes: Math.floor(Math.random() * 176) + 15,
    comments: comments
  };
};

export {createPhoto};
export{createComment};
