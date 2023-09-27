import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const inputObj = {};
const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

for (const key in storageData) {
  if (storageData.hasOwnProperty(key)) {
    inputObj[key] = storageData[key];
    if (key === 'email') {
      form.elements.email.value = storageData[key];
    }
    if (key === 'message') {
      form.elements.message.value = storageData[key];
    }
  }
}

const saveData = throttle(event => {
  try {
    event.preventDefault;
    const inputValue = event.target.value;
    const inputName = event.target.name;
    inputObj[inputName] = inputValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
    return inputObj;
  } catch (error) {
    console.error('Get state errror:', error.message);
  }
}, 500);

form.addEventListener('input', saveData);
form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  form.reset();
  console.log(inputObj);
});
