'use strict';

// Cards
const mainCard = document.querySelector('#main-card');
const successCard = document.querySelector('#success-card');

// Inner Elements
const ratingsContainer = document.querySelector('#ratings');
const button = document.querySelector('button');
const rated = document.querySelector('#rated');

// Stores selected rating
let rating = 0;

// Resets previously selected rating
const resetRating = function () {
  ratingsContainer.querySelectorAll('span').forEach((item) => {
    item.classList.add('bg-medium-grey');
    item.classList.remove('bg-normal-grey');
    item.classList.remove('text-white');
  });
};

// Function to select a clicked rating
const selectRating = function (event) {
  const ratingList = ['one', 'two', 'three', 'four', 'five'];

  if (ratingList.includes(event.target.id)) {
    // Unselects a previously selected rating
    resetRating();

    // Selects the currently clicked rating
    event.target.classList.remove('bg-medium-grey');
    event.target.classList.add('bg-normal-grey');
    event.target.classList.add('text-white');

    // Stores the rating into a variable
    rating = ratingList.indexOf(event.target.id) + 1;
  }
};

// Function to swap cards and show success message card
const swapCards = function () {
  mainCard.classList.toggle('hidden');
  successCard.classList.toggle('hidden');
};

// Event listener for ratings
ratingsContainer.addEventListener('click', function (e) {
  // Call the function to select the clicked rating
  selectRating(e);
});

// Event listener for submit button
button.addEventListener('click', function (e) {
  e.preventDefault();

  // Guard clause if no rating was selected
  if (rating === 0) return;

  // Update rating span on success card
  rated.textContent = rating;

  // Call the function for swapping cards
  swapCards();
});

// Event listener for escape key when success card is visible
document.addEventListener('keydown', function (event) {
  if (!successCard.classList.contains('hidden') && event.key === 'Escape') {
    resetRating();
    swapCards();
  }
});
