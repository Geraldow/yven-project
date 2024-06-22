window.addEventListener('DOMContentLoaded', function() {
    const NAME = document.getElementById('registerName');
    const LASTNAME = document.getElementById('registerLastname');
    const EMAIL = document.getElementById('registerEmail');
    const PASSWORD = document.getElementById('registerPassword');
    const CONFIRM_PASSWORD = document.getElementById('registerConfirmPassword');

    NAME.addEventListener('input', validationNames);
    LASTNAME.addEventListener('input', validationNames);
    EMAIL.addEventListener('input', validationEmail);
    PASSWORD.addEventListener('input', validationPassword);
    CONFIRM_PASSWORD.addEventListener('input', validatePasswordMatch);

    function validationNames(event) {
        const USER_KEYBOARD_ACTION_ON_INPUT_NAME = event.data;
        const REGEX_NAME = /^[A-Za-zñáéíóúÁÉÍÓÚ\s']+$/;

        if (!REGEX_NAME.test(USER_KEYBOARD_ACTION_ON_INPUT_NAME)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡El nombre y apellido solo deben contener letras!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }

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

    function validatePasswordMatch() {
        const password = PASSWORD.value;
        const confirmPassword = CONFIRM_PASSWORD.value;

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Las contraseñas no coinciden!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }
});
