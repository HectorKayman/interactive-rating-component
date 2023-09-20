'use strict';

const ratingsContainer = document.querySelector('#ratings');
const button = document.querySelector('button');
const rated = document.querySelector('#rated');

let rating = 0;

const resetRating = function () {
  ratingsContainer.querySelectorAll('span').forEach((item) => {
    item.classList.add('bg-medium-grey');
    item.classList.remove('bg-normal-grey');
    item.classList.remove('text-white');
  });
};

ratingsContainer.addEventListener('click', function (e) {
  const ratingList = ['one', 'two', 'three', 'four', 'five'];

  if (ratingList.includes(e.target.id)) {
    resetRating();
    e.target.classList.remove('bg-medium-grey');
    e.target.classList.add('bg-normal-grey');
    e.target.classList.add('text-white');

    rating = ratingList.indexOf(e.target.id) + 1;
  }
  console.log(rating);
});
