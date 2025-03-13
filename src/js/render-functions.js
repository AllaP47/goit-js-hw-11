import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a");

export function renderGallery(images) {
  gallery.innerHTML = ""; // Очищення перед новим пошуком

  if (images.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query.",
      position: "topRight",
    });
    return;
  }

  const markup = images
    .map(
      (img) => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>❤️ ${img.likes}</p>
        <p>👁️ ${img.views}</p>
        <p>💬 ${img.comments}</p>
        <p>⬇️ ${img.downloads}</p>
      </div>
    </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

