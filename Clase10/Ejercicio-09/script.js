
const $ = (selector) => document.querySelector(selector);

// Navbar burger functionality
            document.addEventListener('DOMContentLoaded', () => {
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            if ($navbarBurgers.length > 0) {
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            }
        });

          // Form

            const form = $("#contactForm");
            const nameInput = $("#firstName");
            const emailInput = $("#email");
            const messageInput = $("#projectDescription"); 
            const emailHelp = $("#emailHelp");

            // Manejo del envío del formulario
            form.addEventListener("submit", function(e) {
                e.preventDefault();

                const formData = {
                    nombre: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    mensaje: messageInput.value.trim(),
                };

                console.log("Datos del formulario:", formData);
                
                // Mensaje de éxito
                form.innerHTML = `
                    <div class="notification is-success">
                        <i class="fas fa-check-circle mr-2"></i>
                        ¡Gracias por tu mensaje ${formData.nombre}! Te contactaremos pronto.
                    </div>
                `;
            });

           // Validación de email 
            emailInput.addEventListener("input", () => {
                const emailValue = emailInput.value;

                if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailValue)) {
                    emailInput.classList.add("is-success");
                    emailInput.classList.remove("is-danger");
                    emailHelp.textContent = "Email válido";
                    emailHelp.className = "help is-success";
                } else {
                    emailInput.classList.add("is-danger");
                    emailInput.classList.remove("is-success");
                    emailHelp.textContent = "Email inválido";
                    emailHelp.className = "help is-danger";
                }
            });
        
            
           // Botón de peligro
            const dangerButton = document.querySelector(".button.is-danger.is-outlined");

            if (dangerButton) {
            dangerButton.addEventListener("click", () => {
             alert("⚠️ ¡Cuidado! Estás por realizar una acción peligrosa.");
            });
           }