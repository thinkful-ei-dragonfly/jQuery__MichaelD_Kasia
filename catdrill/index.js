/* eslint-disable no-undef */
/* eslint-disable strict */
// eslint-disable-next-line no-undef

$('.thumbnail').on('click', e =>{
  const clickedEl = $(e.target);
  const heroImgEl = $('.hero').find('img');

  const src = clickedEl.attr('src');
  const alt = clickedEl.attr('alt');
  heroImgEl.attr('src', src);
  heroImgEl.attr('alt', alt);
});