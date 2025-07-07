document.addEventListener("click", function (flip) {
  const card = flip.target.closest(".card");
  if (card) {
    card.classList.toggle("flipped");
  }
});