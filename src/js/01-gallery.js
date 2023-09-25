// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`
  )
  .join('');

galleryList.innerHTML = markup;

galleryList.addEventListener('click', event => {
  event.preventDefault();
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
