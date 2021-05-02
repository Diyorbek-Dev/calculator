const input = document.querySelector("#input");
const btns = document.querySelectorAll('button');
const equal = document.querySelector('.btn-equal')
const clear = document.querySelector(".clear");





btns.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let val = e.target.dataset.num;
        input.value += val;
    })
    equal.addEventListener('click', function () {
        if (input.value === '') {
            input.value = ""
        } else {
            let answer = eval(input.value);
            input.value = answer;

        }
    })
    clear.addEventListener('click', function () {
        input.value = '';
    })

})

