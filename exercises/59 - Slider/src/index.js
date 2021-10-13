function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw Error('No slider passed in');
  }
  // creating slide variables
  let current;
  let prev;
  let next;
  // selecting the elements for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    prev.classList.add('prev');
    current.classList.add('current');
    next.classList.add('next');
  }
  function move(direction) {
    // first strip all classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [prev, current, next] = [
        // Getting the next or first slide
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // Getting the next or first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  // eventlisteners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
