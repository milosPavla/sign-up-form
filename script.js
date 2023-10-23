let checkPassword = () => {
    let password1 = document.querySelector('#user-password').value;
    let password2 = document.querySelector('#user-confirm-password').value;
    
    if(password1 === password2) {
        document.querySelector('#user-password').classList.remove('false');
        document.querySelector('#user-confirm-password').classList.remove('false');
    }
    else {
        document.querySelector('#user-password').classList.add('false');
        document.querySelector('#user-confirm-password').classList.add('false');
    }
}

document.querySelector('#submit-btn').addEventListener('click', checkPassword);