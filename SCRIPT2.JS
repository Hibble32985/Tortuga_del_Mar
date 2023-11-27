    const generateButton = document.getElementById('generate');

    const passwordTextarea = document.getElementById('password');
    
    function generatePassword() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const length = 15

    let password= "";

    for (let i = 0; i <length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password +=characters.charAt(randomIndex);
    }

    passwordTextarea.value = password;
}

    generateButton.addEventListener('click', generatePassword);