function change(fruit) {
  const bowls = document.getElementById("bowls");
  bowls.classList = ""; // Clears existing classes
  bowls.classList.add(fruit); // Adds the selected fruit class

  const body = document.querySelector("body");
  body.style.backgroundColor = `var(--${fruit}-background)`; // Corrected string interpolation
  const circle = document.getElementById("circle");
  circle.style.backgroundColor = `var(--${fruit}-circle)`; // Corrected string interpolation
}
