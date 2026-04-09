const applicationModal = document.querySelector(".application-modal");

const applicationButton = document.querySelector("#apply-button");
applicationButton.addEventListener("click", () => {
  applicationModal.style.display = "flex";
});

const closeApplicationButton = document.querySelector(".application-modal-close-button");
closeApplicationButton.addEventListener("click", () => {
  applicationModal.style.display = "none";
});
