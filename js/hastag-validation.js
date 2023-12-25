import { pristine, checkValidation } from './validation.js';

const hashtagInput = document.querySelector('.text__hashtags');

const hashtagTemplate = /^#[a-zа-яё0-9]{1,19}$/i;
const hashtagMaxLen = 20;
const hashtagMaxNum = 5;

let errorMessage;

const hashtagValidate = (value) => {
  const hashtags = value
    .split(' ')
    .filter((tag) => tag !== '')
    .map((tag) => tag.toLowerCase());

  if (hashtags.length > hashtagMaxNum) {
    errorMessage = `Превышено количество хэш-тегов, максимально число: ${hashtagMaxNum}`;
    return false;
  }

  if (hashtags.some((tag) => hashtags.indexOf(tag) !== hashtags.lastIndexOf(tag))) {
    errorMessage = 'Хэш-теги повторяются';
    return false;
  }

  for (const hashtag of hashtags) {
    if (!hashtagTemplate.test(hashtag)) {
      if (hashtag[0] !== '#') {
        errorMessage = 'Первым символом должна быть решетка';
      } else if (hashtag.length === 1) {
        errorMessage = 'Хештег не может быть пустым';
      } else if (hashtag.length > hashtagMaxLen) {
        errorMessage = 'Максимальная длинна хештега: 20 символов';
      } else {
        errorMessage = 'Введён невалидный хэш-тег';
      }
      return false;
    }
  }
  return true;
};

const getHashtagErrorMessage = () => errorMessage;

pristine.addValidator(hashtagInput, hashtagValidate, getHashtagErrorMessage);

const onHashtagInput = () => {
  checkValidation();
};

hashtagInput.addEventListener('input', onHashtagInput);
hashtagInput.addEventListener('keydown', (evt) => evt.stopPropagation());
