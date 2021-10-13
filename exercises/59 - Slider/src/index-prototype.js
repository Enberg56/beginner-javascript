function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw Error('No slider passed in');
  }
  // selecting the elements for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  this.startSlider();
  this.applyClasses();
  // eventlisteners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  console.log({ current: this.current, prev: this.prev, next: this.next });
};

Slider.prototype.applyClasses = function () {
  this.prev.classList.add('prev');
  this.current.classList.add('current');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  // first strip all classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    [this.prev, this.current, this.next] = [
      // Getting the next or first slide
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // Getting the next or first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider, dogSlider);
