import Notiflix from "notiflix";
const getEl = selector => document.querySelector(selector);
const formRef = getEl('.form');
const delayInputRef = getEl('input[name="delay"]');
const stepInputRef = getEl('input[name="step"]');
const amountInputRef = getEl('input[name="amount"]');
const submitBtnRef = getEl('button');

formRef.addEventListener('input', () => {
  let delay = parseInt(delayInputRef.value);
  let step = parseInt(stepInputRef.value);
  let amount = parseInt(amountInputRef.value);
  submitBtnRef.addEventListener('click', (event) => {
    event.preventDefault();

    function createPromise(position, delay) {
      return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3; 
        setTimeout(() => {
          if (shouldResolve) {
            resolve({position, delay});// Fulfill
          } else {
            reject({position, delay});// Reject
          };
        }, delay)
      })
    };   
    for(let i = 1; i <= amount; i += 1) {
      createPromise(i, delay).then(({position, delay}) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
      delay += step;
    };
  })
});
