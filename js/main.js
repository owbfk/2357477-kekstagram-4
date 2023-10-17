/* eslint-disable no-console */
import {messages, names, descriptions} from '/js/data.js';
import {createComment, createPhoto} from '/js/util.js';

let photos = [];
for (let iterrations = 0; iterrations < 25; iterrations++){
  photos[iterrations] = createPhoto(iterrations);
}
console.log(photos);
