const input_datas = document.querySelectorAll('.input-data');
const password_visibel = document.querySelector('.password-visible');
const input_type = document.querySelector('#password');

password_visibel.onclick = () => {
    const input = input_datas[3].querySelector('input');
    if (input.type == 'password') {
        input.type = 'text';
        password_visibel.innerText = '숨기기';
    } else {
        input.type = 'password';
        password_visibel.innerText = '비밀번호 표시';
    }
}

// password_visibel.onclick = () => {
//     if (input_type.type == 'password') {
//         input_type.type = 'text';
//         password_visibel.innerHTML = '숨기기';
//     } else {
//         input_type.setAttribute('type', 'password');
//         password_visibel.innerHTML = '비밀번호 표시';
//     }
// }

for (let i = 0; i < input_datas.length; i++) {
    const label = input_datas[i].querySelector('label')
    const input = input_datas[i].querySelector('input')

    input.onkeydown = () => {
        label.style.top = '2px';
        label.style.fontSize = '11px';
        input.style.padding = '16px 0px 2px 8px';

    }

    input.onkeyup = () => {
        if (input.value.length == 0) {
            label.style.top = '9px';
            label.style.fontSize = '13px';
            input.style.padding = '9px 0px 7px 8px';
        }
    }

    input.onblur = () => {
        const inputMsg = document.querySelectorAll('.input-msg');
        if (input.value.length == 0) {
            inputMsg[i].innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        } else {
            inputMsg[i].innerHTML = '<i class="fa-solid fa-circle-check" style="color: #8e8e8e;"></i>';
        }
    }
}