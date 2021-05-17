'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Old way to do requests

// NOTE:
// Promise using fetch API needs to be transformed into json, method that is available
// on all resolved values also this method is asynchronous so that means it returns a new promise

// NOTE:
// Handling errors in promises can happend on then method but you can set it
// globally that way anywhere an error occurs it trigger the catch method
// also catch method return a promise so we can chain a finally method

// NOTE:
// Throwing errors automatically rejects the promise and it will travels
// down to the catch method

// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}M people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const getJSON = function (url, message = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${message} (${res.status})`);
//     return res.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found');
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error =>
//       renderError(`Something went wrong ${error.message}. Try again!`)
//     )
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// NOTE:
// Callback hell makes code unreadable

// setTimeout(() => {
//   console.log('1 sec');
//   setTimeout(() => {
//     console.log('2 sec');
//     setTimeout(() => {
//       console.log('3 sec');
//       setTimeout(() => {
//         console.log('4 sec');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// CODE CHALLENGE 1
// const renderErrorGeocode = function (message = 'Something went wrong') {
//   throw new Error(message);
// };

// const getCountryData = function (url, message = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${message} (${res.status})`);
//     return res.json();
//   });
// };

// const renderCountry = (data, className = '') => {
//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}M people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderErrorUI = msg => {
//   countriesContainer.insertAdjacentText(
//     'beforeend',
//     `Something went wrong ${msg}`
//   );
// };

// const whereImI = function (...coords) {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
//     })
//     .then(res => {
//       if (!res.ok && res.status === 403)
//         renderErrorGeocode('You can only do 3 request per second');
//       return res.json();
//     })
//     .then(data => {
//       const { city, country } = data;
//       console.log(`You are in ${city}, ${country}`);
//       return getCountryData(
//         `https://restcountries.eu/rest/v2/name/${country}`,
//         `No results found for ${country}`
//       );
//     })
//     .then(data => {
//       const [country] = data;
//       const neighbour = country.borders[0];
//       renderCountry(data[0]);
//       if (!neighbour) throw new Error(`No neighbour found for ${country.name}`);
//       return getCountryData(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         `No results found for ${country.name}`
//       );
//     })
//     .then(data => {
//       renderCountry(data);
//     })
//     .catch(error => {
//       console.error(error);
//       renderErrorUI(error.message);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', whereImI);

// NOTE:
// Promise is a special kind of object and recieves an executor function
// and that function recieves 2 parameters resolve and reject (functions)

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // NOTE:
// // Promisifying converts callback based code with async behavior to promises

// // Callback Hell

// // setTimeout(() => {
// //   console.log('1 sec');
// //   setTimeout(() => {
// //     console.log('2 sec');
// //     setTimeout(() => {
// //       console.log('3 sec');
// //       setTimeout(() => {
// //         console.log('4 sec');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(1)
//   .then(() => {
//     console.log('1 sec');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 sec');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 sec');
//     return wait(1);
//   })
//   .then(() => console.log('4 sec'));

// // NOTE:
// // Resolve and reject a promise is a static method of Promise
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.error(x));

// CODE CHALLENGE 3
// const imgContainer = document.querySelector('.images');

// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// const createImage = function (path) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = path;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Error loading image'));
//     });
//   });
// };

// let currentImage;

// createImage('/img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.transition = 'all 1s';
//     currentImage.style.opacity = '0';
//     currentImage.style.display = 'none';

//     return createImage('/img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.transition = 'all 1s';
//     currentImage.style.opacity = '0';
//     currentImage.style.display = 'none';

//     return createImage('/img/img-3.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .catch(err => console.error(err));

const renderCountry = (data, className = '') => {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderErrorUI = msg => {
  countriesContainer.insertAdjacentText(
    'beforeend',
    `Something went wrong ${msg}`
  );
};

// NOTE:
// Return fulfill with that value and throw propagates the error down

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting location data');

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    throw error;
  }
};

btn.addEventListener('click', function () {
  (async function () {
    try {
      const res = await whereAmI();
      console.log(res); // You are in GUSTAVO A. MADERO, Mexico
    } catch (error) {
      renderErrorUI(error.message);
      console.error(error);
    } finally {
      countriesContainer.style.opacity = 1;
    }
  })();
});

// NOTE:
// Try - Catch statement began when they developed the language

// try {
//   let x = 13;
//   const y = 11;
//   y = 5;
// } catch (error) {
//   console.error(error); // TypeError: Assignment to constant variable.
// }

// const getJSON = async function (url, message = 'Something went wrong') {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`${message} (${res.status})`);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// NOTE:
// Promise all returns an array with the results of the promises
// also if one of them rejects whole operation will rejects

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(
//         `https://restcountries.eu/rest/v2/name/${c1}`,
//         `Error getting ${c1}`
//       ),
//       getJSON(
//         `https://restcountries.eu/rest/v2/name/${c2}`,
//         `Error getting ${c2}`
//       ),
//       getJSON(
//         `https://restcountries.eu/rest/v2/name/${c3}`,
//         `Error getting ${c3}`
//       ),
//     ]);
//     console.log(data.map(d => d[0].name));
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('mexico', 'usa', 'canada');

// const getJSON = async function (url, message = 'Something went wrong') {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`${message} (${res.status})`);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// const timeout = async function (sec) {
//   try {
//     await new Promise((_, reject) => {
//       setTimeout(function () {
//         reject(new Error('Request took too long!'));
//       }, sec * 1000);
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// // NOTE:
// // Promise Any returns first fulfilled promise and ignores the rejected ones
// // unless all of the given promises rejects

// (async function () {
//   try {
//     const res = await Promise.any([
//       getJSON('https://restcountries.eu/rest/v2/name/mexico'),
//       getJSON('https://restcountries.eu/rest/v2/name/canada'),
//       timeout(2),
//     ]);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// // NOTE:
// // All Settled returns an array of results with the given promises

// (async function () {
//   try {
//     const res = await Promise.allSettled([
//       getJSON('https://restcountries.eu/rest/v2/name/mexico'),
//       getJSON('https://restcountries.eu/rest/v2/name/canada'),
//       timeout(2),
//     ]);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// // NOTE:
// // Race returns the first settled promise even if one rejects or fulfills

// (async function () {
//   try {
//     const race = await Promise.race([
//       getJSON('https://restcountries.eu/rest/v2/name/mexico'),
//       getJSON('https://restcountries.eu/rest/v2/name/canada'),
//       timeout(2),
//     ]);
//     console.log(race[0]); // Mexico
//   } catch (error) {
//     console.error(error);
//   }
// })();

// CODE CHALLENGE 3

const imgContainer = document.querySelector('.images');

const delay = async function (seconds) {
  const waitTimeout = await new Promise(resolve =>
    setTimeout(resolve, seconds * 1000)
  );
  return waitTimeout;
};

const loadImage = async img => {
  try {
    const imageLoaded = await new Promise((resolve, reject) => {
      img.addEventListener('load', function () {
        imgContainer.append(img);
        resolve(img);
      });
      img.addEventListener('error', function () {
        reject(new Error(`Error loading image ${img.getAttribute('src')}`));
      });
    });
    return imageLoaded;
  } catch (error) {
    throw error;
  }
};

const createImage = async function (path) {
  try {
    const img = document.createElement('img');
    img.src = path;
    const loaded = await loadImage(img);
    return loaded;
  } catch (error) {
    throw error;
  }
};

// let currentImage;

// (async function () {
//   try {
//     let img = await createImage('/img/img-1.jpg');
//     currentImage = img;

//     await delay(1);
//     currentImage.style.display = 'none';
//     img = await createImage('/img/img-22.jpg');
//     currentImage = img;
//     await delay(1);
//     currentImage.style.display = 'none';
//     img = await createImage('/img/img-3.jpg');
//     currentImage = img;
//     await delay(1);
//   } catch (error) {
//     console.error(error);
//   }
// })();

const loadAll = async imgArr => {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const arrImg = await Promise.all(imgs);
    arrImg.forEach(img => img.classList.add('parallel'));
    console.log(imgs);
  } catch (error) {
    console.error(error);
  }
};

loadAll(['/img/img-1.jpg', '/img/img-2.jpg', '/img/img-3.jpg']);

// createImage('/img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.transition = 'all 1s';
//     currentImage.style.opacity = '0';
//     currentImage.style.display = 'none';

//     return createImage('/img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.transition = 'all 1s';
//     currentImage.style.opacity = '0';
//     currentImage.style.display = 'none';

//     return createImage('/img/img-3.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .catch(err => console.error(err));
