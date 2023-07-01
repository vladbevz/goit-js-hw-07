import { galleryItems } from "./gallery-items.js";
//
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
      <a class="gallery__link" href="${item.original}">
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

const lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: "250",
});
