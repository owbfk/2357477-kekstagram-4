/* eslint-disable no-console */
import { createPhoto } from '/js/util.js';
import './form.js';
import { drawPictures } from '/js/draw.js';


const photos = [];
for (let iterrations = 0; iterrations < 25; iterrations++){
  photos[iterrations] = createPhoto(iterrations);
}

drawPictures(photos);

console.log(photos);
