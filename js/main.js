const applicationModal = document.querySelector(".application-modal");

const addBodyStyles = () => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
};

const removeBodyStyles = () => {
  document.body.style.overflow = "unset";
  document.body.style.paddingRight = "0px";
};

const applicationButton = document.querySelector("#apply-button");
applicationButton.addEventListener("click", () => {
  applicationModal.style.display = "flex";
  addBodyStyles();
});

const closeApplicationButton = document.querySelector(".application-modal-close-button");
closeApplicationButton.addEventListener("click", () => {
  applicationModal.style.display = "none";
  removeBodyStyles();
});

const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector(".search");
const closeSearchButton = document.querySelector(".search-bar__close-icon");

searchButton.addEventListener("click", () => {
  searchContainer.style.display = "flex";
  addBodyStyles();
});

closeSearchButton.addEventListener("click", () => {
  searchContainer.style.display = "none";
  removeBodyStyles();
});
