const mainContainer = document.querySelector(".main-container");
const thansContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thansContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
rateAgain.addEventListener("click", () => {
  thansContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
