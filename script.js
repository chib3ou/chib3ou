// Sélection du bouton
const backToTopButton = document.getElementById('backToTop');

// Afficher/Masquer le bouton lors du défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // S'affiche après 200px de défilement
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Remonter en haut de la page au clic
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animation fluide
    });
});
// Sélectionner le bouton par son id
const button = document.getElementById('myButton');
        
// Ajouter un événement au clic sur le bouton
button.addEventListener('click', function() {
    // Utiliser prompt() pour afficher un champ de saisie
    const userInput = prompt("dites Hey!:");

    if (userInput !== null) { // Si l'utilisateur n'annule pas
        alert("Vous avez écrit : " + userInput);
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire si les validations échouent

    // Récupération des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation des champs
    if (name === "" || email === "" || message === "") {
        showMessage("Veuillez remplir tous les champs.");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("Veuillez entrer un email valide.");
        return;
    }

    // Si toutes les validations passent
    alert("Message envoyé avec succès !");
    document.getElementById('contactForm').reset();
});

// Fonction pour valider l'email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Fonction pour afficher un message d'erreur
function showMessage(message) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.style.display = 'block';

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000); // Le message disparaît après 3 secondes
}
// Récupérer l'élément checkbox
const toggle = document.getElementById("darkModeToggle");

// Ajouter un gestionnaire d'événements pour le changement d'état
toggle.addEventListener("change", () => {
    // Basculer entre mode clair et mode sombre
    document.body.classList.toggle("dark-mode", toggle.checked);
});





