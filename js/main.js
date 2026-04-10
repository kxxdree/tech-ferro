const applicationModal = document.querySelector(".application-modal");

const applicationButton = document.querySelector("#apply-button");
applicationButton.addEventListener("click", () => {
  applicationModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
});

const closeApplicationButton = document.querySelector(".application-modal-close-button");
closeApplicationButton.addEventListener("click", () => {
  applicationModal.style.display = "none";
  document.body.style.overflow = "unset";
  document.body.style.paddingRight = "0px";
});
