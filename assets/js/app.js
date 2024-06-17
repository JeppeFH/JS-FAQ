/*FAQ*/
let faqContainer = document.querySelectorAll(".faq-container");
/*Let = En literal der bruges til at deklarere en variabel.*/
/*document = kobler det til ens html */
/*querySelectorAll =  Søger efter alle elementer i dokumentet, 
der har class eller id*/

faqContainer.forEach((faqContainer) => {
  /*forEach er en metode, der anvendes på arrays for at iterere over hvert element.*/
  faqContainer.addEventListener("click", () => {
    /*tilføjer event listener til hvert faqContainer element. Her et "click" event*/
    faqContainer.classList.toggle("active");
    /*classList repræsenterer attributterne (klasserne) for det pågældende element.*/
    /*toggle er en metode på classList, der tilføjer klassen "active", hvis den ikke 
    allerede er der, og fjerner den, hvis den er der. Dette gør det muligt at skifte tilstanden af et element ved klik.*/
  });
});
