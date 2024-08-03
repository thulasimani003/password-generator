document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const slider = document.querySelector('.slider input');
    const sliderValue = document.querySelector('.slide');
    const generateButton = document.querySelector('.generate');

    sliderValue.textContent = slider.value;
    slider.addEventListener('input', function () {
        sliderValue.textContent = slider.value;
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
    generateButton.addEventListener('click', function () {
        const passwordLength = parseInt(slider.value);
        const newPassword = generatePassword(passwordLength);
        input.value = newPassword;
    });
});
