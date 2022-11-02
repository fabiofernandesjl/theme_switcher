const button = document.querySelector(".toogle-button");

button.addEventListener("click", () => {
  const container = document.querySelector(".container");

  container.classList.toggle("dark");
});
