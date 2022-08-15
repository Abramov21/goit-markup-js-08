// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit)
fillFormData();

function onFormInput(event) {
    const data = {
        email: form.email.value,
        message: form.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}


function onFormSubmit(event){
    event.preventDefault();

    let data ={
        email: form.email.value,
        message: form.message.value,
    }
    console.log(data);

    // localStorage.clear();
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
}

function fillFormData() {
    const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveData) {
        form.email.value = saveData.email;
        form.message.value = saveData.message;
    }
}
