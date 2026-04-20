const searchItemsList = document.querySelector(".search__success-list");

const listItemHTML = `
<li class="search__success-list-item list__item">
    <a href="/catalog/id.html" class="list__item-link">
        <img class="list__item-image" src="assets/images/search/search-item-photo.png" alt="Фото товара" />
        <div class="list-item__info">
            <div class="list-item__info-title">
                <h4>Костровая чаша</h4>
                <h3>Fire Cube</h3>
            </div>
            <p class="list-item__info-price">3 590 ₽</p>
        </div>
    </a>
</li>
`;

for (let i = 0; i < 12; i++) {
  searchItemsList.insertAdjacentHTML("beforeend", listItemHTML);
}