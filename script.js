document.addEventListener('DOMContentLoaded', function() {
    // 1. Gestion des liens de navigation
    const initNavLinks = () => {
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            // Style au survol
            link.addEventListener('mouseenter', () => {
                link.style.color = '#00ffff';
                link.style.transition = 'color 0.3s';
            });
            
            // Style normal
            link.addEventListener('mouseleave', () => {
                if (!link.classList.contains('active')) {
                    link.style.color = '#333';
                }
            });
            
            // Cliquez pour ajouter la classe active
            link.addEventListener('click', () => {
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    };

    // 2. Bouton Télécharger CV
    const initDownloadBtn = () => {
        const btn = document.getElementById('download-cv');
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.textContent = 'Téléchargement...';
                setTimeout(() => {
                    this.textContent = 'CV téléchargé!';
                    setTimeout(() => {
                        this.textContent = 'Télécharger mon CV';
                    }, 2000);
                }, 500);
            });
        }
    };

    // 3. Formulaire de contact
    const initContactForm = () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const submitBtn = this.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.textContent = 'Envoi en cours...';
                    setTimeout(() => {
                        submitBtn.textContent = 'Message envoyé!';
                        setTimeout(() => {
                            form.reset();
                            submitBtn.textContent = 'Envoyer';
                        }, 2000);
                    }, 1000);
                }
            });
        }
    };
console.log('Script chargé');
document.body.style.border = '5px solid red';
    // Initialiser toutes les fonctions
    initNavLinks();
    initDownloadBtn();
    initContactForm();

    // 4. Debugging - Affiche un message si JavaScript s'exécute
    console.log('JavaScript chargé et exécuté');
});