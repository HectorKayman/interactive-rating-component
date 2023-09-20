'use strict';

const ratingsContainer = document.querySelector('#ratings');
const button = document.querySelector('button');
const rated = document.querySelector('#rated');

let rating = 0;

ratingsContainer.addEventListener('click', function (e) {
  const ratingList = ['one', 'two', 'three', 'four', 'five'];

  if (ratingList.includes(e.target.id)) {
    ratingsContainer.querySelectorAll('span').forEach((item) => {
      item.classList.add('bg-medium-grey');
      item.classList.remove('bg-normal-grey');
      item.classList.remove('text-white');
    });
    e.target.classList.remove('bg-medium-grey');
    e.target.classList.add('bg-normal-grey');
    e.target.classList.add('text-white');

    rating = ratingList.indexOf(e.target.id) + 1;
  }
  console.log(rating);
});
