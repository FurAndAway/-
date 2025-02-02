// script.js
document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.getElementById("reviews-container");

  // Sample array of reviews
  const reviews = [
    "“My dog loved staying here! Highly recommend.” – Sarah B.",
    "“Professional and caring staff! Five stars.” – John D.",
    "“Great prices and top-notch service. Will be back!” – Kelly R."
  ];

  let currentIndex = 0;

  // Function to display current review
  function showReview(index) {
    reviewsContainer.textContent = reviews[index];
  }

  // Initial review
  showReview(currentIndex);

  // Cycle reviews every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }, 3000);
});
