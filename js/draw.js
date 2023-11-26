function drawPictures (photos) {
  let picturesContainer = document.querySelector('.pictures');
  let pictureTemplate = document.querySelector('#picture').content;

  for (let i = 0; i<photos.length; i++){
    let newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector("a > img").src = photos[i].url;
    newPicture.children[0].children[0].alt = photos[i].description;
    newPicture.children[0].children[1].children[1].textContent = photos[i].likes;
    newPicture.children[0].children[1].children[0].textContent = photos[i].comments.length;
    picturesContainer.appendChild(newPicture);
  }
};
export {drawPictures};
