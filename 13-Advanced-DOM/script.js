'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords); // DOM Rectangle with coords

  console.log(e.target.getBoundingClientRect()); // DOM Rectangle with coords

  // Current scroll
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // Client viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling old way
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    // Matching strategy
    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// Tabbed component

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;
  // Remove active class
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Active class
  clicked.classList.add('operations__tab--active');

  // Content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Sticky Nav
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Reveal images
// CSS selections
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(section => imgObserver.observe(section));

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach((_, idx) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `
      <button class="dots__dot" data-slide="${idx}"></button>
      `
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (slider, idx) =>
        (slider.style.transform = `translateX(${100 * (idx - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (event) {
    event.key === 'ArrowLeft' && prevSlide();
    event.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('dots__dot')) {
      const { slide } = event.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// NOTE:
// Intersecion Observer allows us to trigger a callback
// when elements intersects

// const obsCallback = function (entries, observer) {
//   console.log(observer); // IntersectionObserver
//   entries.forEach(entry => {
//     console.log(entry); // IntersectionObserverEntry
//   });
// };

// const obsOptions = {
//   // element root to observe intersection (null = entire viewport)
//   root: null,
//   // percentage to have visible on viewport
//   threshold: [0, 0.1],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

// const initialCoords = section1.getBoundingClientRect();
// // Top: number top of the page to section
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Menu fade animation

const handleHover = function (event) {
  // Bind create a copy of the function and then we can pass
  // a this value

  if (event.target.classList.contains('nav__link')) {
    // select a tag
    const link = event.target;
    // selecting siblings from nav
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// // NOTE:
// // Gets a reference to the root node of the document.
// console.log(document.documentElement);
// // NOTE:
// // Returns the head element of the document.

// console.log(document.head);

// // NOTE:
// // Returns the body element of the document.

// console.log(document.body);

// // NOTE:
// // Returns all tag elements.

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const header = document.querySelector('.header');

// // NOTE:
// // Returns all elements with the given class.

// const classBtn = document.getElementsByClassName('btn');
// console.log(classBtn);

// // NOTE:
// // Creates an HTML element.

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// // NOTE:
// // This method returns an object with the CSS
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // NOTE:
// // Attributes from HTML

// // Attributes
// // Standard properties
// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt); // Alt from HTML

// // Non-standar

// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Jonas
// logo.setAttribute('company', 'Bankist'); // Inserting on DOM

// // Absolute
// console.log(logo.src);
// // Relative
// console.log(logo.getAttribute('src'));

// // Data attributes is an object

// console.log(logo.dataset.versionNumber); // 3.0

// Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// DEPRECATED
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// NOTE:
// Example for bubbling and target phase

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     // Object to which event is dispatched
//     console.log('Link', event.target);
//     // Object whose event listener's callback is currently being invoked
//     console.log('Link', event.currentTarget);
//     console.log(event.currentTarget === this); // true
//     // Stop Propagation (bad practice)
//     // event.stopPropagation();
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     // Object to which event is dispatched
//     console.log('Container', event.target);
//     // Object whose event listener's callback is currently being invoked
//     console.log('Container', event.currentTarget);
//   });

// document.querySelector('.nav').addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   // Object to which event is dispatched
//   console.log('Nav', event.target);
//   // Object whose event listener's callback is currently being invoked
//   console.log('Nav', event.currentTarget);
// });

// const h1 = document.querySelector('h1');
// /* -------------------------------- Downwards ------------------------------- */
// // Selecting direct childs

// // Query selector all selects all children of H1
// // no matter how deep they are in the DOM
// console.log(h1.querySelectorAll('.highlight')); // NodeList(2)

// // Direct children nodes (comments, tags, text, etc)
// console.log(h1.childNodes); // NodeList(9)

// // Children elements (live collection) this means that
// // the current list gets updated if any elements are deleted
// console.log(h1.children); // HTMLCollection(3)

// // Selecting first and last element child
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// /* --------------------------------- Upwards -------------------------------- */
// // Selecting parent node (comments, tags, text, etc)
// console.log(h1.parentNode); // div

// // Selecting parent element
// console.log(h1.parentElement); // div

// // Closest recieve a string with class, id or tag
// // no matter how far up is in the DOM
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// /* -------------------------------- Sideways -------------------------------- */
// // Selecting previous and next siblings elements
// console.log(h1.previousElementSibling); // null
// console.log(h1.nextElementSibling); // h4
// // Selecting nodes sibling (comments, tags, text, etc)
// console.log(h1.previousSibling); // text
// console.log(h1.nextSibling); // text
// // Get all siblings
// console.log(h1.parentElement.children); // HTMLCollection(4)

// [...h1.parentElement.children].forEach(element => {
//   if (element !== h1) element.style.transform = 'scale(0.5)';
// });

// NOTE:
// Lifecycle of DOM let us access to those events

// event when HTML is parsed and DOM tree built
// not really necesary cause scripts are always at end of body
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('HTML parsed and DOM tree built', event);
});

// Event when page is fully loaded (img, css, etc)
window.addEventListener('load', function (event) {
  console.log('Page fully loaded', event);
});

// Event when user tries to leave or reload page
// DO NOT ABUSE
// window.addEventListener('beforeunload', function (event) {
//   // other browsers compatability
//   event.preventDefault();
//   console.log(event);
//   // standard popup
//   event.returnValue = '';
// });
