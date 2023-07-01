import { galleryItems } from "./gallery-items.js";

// etap 1

const galleryList = document.querySelector(".gallery");
createImagesItems();

function createImagesItems() {
  const importImages = createImagesEl(galleryItems);
  galleryList.innerHTML = importImages.join("");
}
function createImagesEl(items) {
  return items.map(
    (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
  );
}
// etap 2
const onClick = (el) => {
  el.preventDefault();
  if (el.target.classList.contains("gallery")) return;
  const source = el.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );
  instance.show();
};
galleryList.addEventListener("click", onClick);
