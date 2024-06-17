/*FAQ*/
let faqContainer = document.querySelectorAll(".faq-container");

faqContainer.forEach((faqContainer) => {
  faqContainer.addEventListener("click", () => {
    faqContainer.classList.toggle("active");
  });
});
