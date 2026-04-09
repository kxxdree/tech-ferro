const applicationModal = document.querySelector(".application-modal");

const applicationButton = document.querySelector("#apply-button");
applicationButton.addEventListener("click", () => {
  applicationModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

const closeApplicationButton = document.querySelector(".application-modal-close-button");
closeApplicationButton.addEventListener("click", () => {
  applicationModal.style.display = "none";
  document.body.style.overflow = "scroll";
});
