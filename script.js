document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.getElementById("reviews-container");

  // Sample array of review objects
  const reviews = [
    {
      rating: 5,
      text: "My dog absolutely loved her stay! Highly recommended.",
      author: "– Sarah B."
    },
    {
      rating: 5,
      text: "Professional and attentive service. My cat felt right at home!",
      author: "– John D."
    },
    {
      rating: 5,
      text: "Brilliant prices and lovely staff. We’ll definitely be returning!",
      author: "– Kelly R."
    }
  ];

  let currentIndex = 0;

  // Function to create star icons
  function generateStars(num) {
    let stars = "";
    for (let i = 0; i < num; i++) {
      stars += "★";
    }
    return `<span class="stars">${stars}</span>`;
  }

  // Function to display the current review
  function showReview(index) {
    const { rating, text, author } = reviews[index];
    const starHTML = generateStars(rating);

    reviewsContainer.innerHTML = `
      <div class="review-item">
        ${starHTML}
        <p class="review-text">“${text}”</p>
        <p class="review-author">${author}</p>
      </div>
    `;
  }

  // Show initial review
  showReview(currentIndex);

  // Cycle through reviews every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }, 3000);
});
