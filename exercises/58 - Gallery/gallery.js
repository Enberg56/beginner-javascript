function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery Found!');
  }
  console.log(gallery);
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function showImage(el) {
    if (!el) {
      console.log('No image to show');
    }
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  function showNextImage(e) {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage(e) {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function openModal() {
    if (modal.matches('.open')) {
      console.log('Modal is already open');
    }
    modal.classList.add('open');

    // eventlisteners related to the modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    // removing modal eventlisteners
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }
  // Event listeners

  images.forEach((image) =>
    image.addEventListener('click', (e) => showImage(e.currentTarget))
  );
  modal.addEventListener('click', handleClickOutside);

  images.forEach((image) =>
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    })
  );
}

//  Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
