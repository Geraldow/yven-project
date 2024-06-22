window.addEventListener('DOMContentLoaded', function() {
    const EMAIL = document.getElementById('loginEmail');
    const PASSWORD = document.getElementById('loginPassword');

    EMAIL.addEventListener('input', validationEmail);
    PASSWORD.addEventListener('input', validationPassword);

    function validationEmail(event) {
        const USER_KEYBOARD_ACTION_ON_INPUT_EMAIL = event.data;
        const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!REGEX_EMAIL.test(USER_KEYBOARD_ACTION_ON_INPUT_EMAIL)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Ingrese un correo electrónico válido!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }

    function validationPassword(event) {
        const USER_KEYBOARD_ACTION_ON_INPUT_PASSWORD = event.data;
        const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if (!REGEX_PASSWORD.test(USER_KEYBOARD_ACTION_ON_INPUT_PASSWORD)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡La contraseña debe contener al menos 8 caracteres, una mayúscula y un número!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }
});
