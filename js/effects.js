import * as filters from './filters.js';

const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');

const effectNone = document.querySelector('#effect-none');

const imgUploadPreview = document.querySelector('.img-upload__preview').children[0];
const uploadEffectLevel = document.querySelector('.img-upload__effect-level');
const uploadEffectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

let currentEffect = filters.DEFAULT;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const hideSlider = () => {
  uploadEffectLevel.classList.add('hidden');
};

hideSlider();

const setCurrentEffect = (effect) => {
  currentEffect = effect;
};

const updateImageFilter = () => {
  imgUploadPreview.style.filter =
    currentEffect === filters.DEFAULT
      ? ''
      : `${currentEffect.style.filter}(${effectLevelSlider.noUiSlider.get()}${currentEffect.style.unit})`;
};

const showSlider = () => {
  uploadEffectLevel.classList.remove('hidden');
};

chromeEffect.addEventListener('click', () => {
  effectLevelSlider.noUiSlider.updateOptions(filters.CHROME_EFFECT.sliderSettings);
  chromeEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.CHROME_EFFECT);
  updateImageFilter();
});

sepiaEffect.addEventListener('click', () => {
  effectLevelSlider.noUiSlider.updateOptions(filters.SEPIA_EFFECT.sliderSettings);
  sepiaEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.SEPIA_EFFECT);
  updateImageFilter();
});

marvinEffect.addEventListener('click', () => {
  effectLevelSlider.noUiSlider.updateOptions(filters.MARVIN_EFFECT.sliderSettings);
  marvinEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.MARVIN_EFFECT);
  updateImageFilter();
});

phobosEffect.addEventListener('click', () => {
  effectLevelSlider.noUiSlider.updateOptions(filters.PHOBOS_EFFECT.sliderSettings);
  phobosEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.PHOBOS_EFFECT);
  updateImageFilter();
});

heatEffect.addEventListener('click', () => {
  effectLevelSlider.noUiSlider.updateOptions(filters.HEAT_EFFECT.sliderSettings);
  heatEffect.checked = true;
  showSlider();
  setCurrentEffect(filters.HEAT_EFFECT);
  updateImageFilter();
});

effectNone.addEventListener('click', () => {
  effectNone.checked = true;
  uploadEffectLevelValue.value = '';
  hideSlider();
  setCurrentEffect(filters.DEFAULT);
  updateImageFilter();
});

effectLevelSlider.noUiSlider.on('update', () => {
  uploadEffectLevelValue.value = effectLevelSlider.noUiSlider.get();
  updateImageFilter();
});

export { hideSlider, setCurrentEffect, updateImageFilter };
