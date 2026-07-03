const btnModo = document.getElementById("btn-modo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    const modoActivo = document.body.classList.contains("modo-oscuro");    
    btnModo.textContent = modoActivo ? "Modo claro 🌞" : "Modo oscuro 🌑";
});

const formContacto = document.getElementById("form");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const msgForm = document.getElementById("msg-form");
const inputTel = document.getElementById("telefono");

formContacto.addEventListener("submit", (e) => {e.preventDefault();

const nombre = inputNombre.value.trim();
const email = inputEmail.value.trim();
const telefono = inputTel.value.trim();

if (email.length < 4 || !email.includes("@")) {
    msgForm.textContent = "Por favor, ingresá un email válido.";
    msgForm.style.color = "#DE1919";
    return; 
    }

if (telefono.length < 8) {
        msgForm.textContent = "Por favor, ingresá un número de teléfono válido.";
        msgForm.style.color = "#DE1919";
        return;
}
    msgForm.textContent = `¡Gracias ${nombre}! Hemos recibido tus datos. Te contactaremos a la brevedad.`;
    msgForm.style.color = "#1A6B2A"

    formContacto.reset();
});