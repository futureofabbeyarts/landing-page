// Get all flip cards on the page
const flipCards = document.querySelectorAll('.flip-card');

// Loop through each flip card
flipCards.forEach(card => {
  // Add click event listener to the card
  card.addEventListener('click', () => {
    // Toggle the flip card class to activate the animation
    card.classList.toggle('flip-card-active');
  });
});
