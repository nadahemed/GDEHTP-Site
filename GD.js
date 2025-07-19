// Navbar dynamique : changement de l'onglet actif
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
        // document.getElementById('main-content').innerHTML = `<h2>${this.textContent}</h2>`;
        // Scroll animé vers la section (si id existe)
        // const section = document.getElementById(this.dataset.section);
        // if(section) section.scrollIntoView({behavior: 'smooth'});
    });
});

// Hamburger menu responsive + bouton de fermeture
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const closeMenuBtn = document.querySelector('.close-menu-btn');

function openMenu() {
    navList.classList.add('open');
    navList.classList.remove('closing');
    if(closeMenuBtn) closeMenuBtn.style.display = 'block';
}
function closeMenu() {
    navList.classList.add('closing');
    navList.classList.remove('open');
    setTimeout(() => {
        navList.classList.remove('closing');
        if(closeMenuBtn) closeMenuBtn.style.display = 'none';
    }, 400);
}
hamburger.addEventListener('click', openMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
// Fermer le menu si on clique sur un lien (mobile)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if(window.innerWidth <= 700) {
            closeMenu();
        }
    });
});

// Dropdown langue
const langDropBtn = document.querySelector('.lang-dropbtn');
const langDropdown = document.querySelector('.lang-dropdown-content');
const langLabel = document.querySelector('.lang-label');
const langLinks = langDropdown.querySelectorAll('a');
const htmlTag = document.documentElement;
const translations = {
    fr: {
        accueil: 'Accueil',
        palmares: 'Palmarès',
        bureau: 'Bureau',
        revue: 'Revue',
        contact: 'Contact',
        label: 'FR'
    },
    en: {
        accueil: 'Home',
        palmares: 'Awards',
        bureau: 'Board',
        revue: 'Review',
        contact: 'Contact',
        label: 'EN'
    },
    ar: {
        accueil: 'الرئيسية',
        palmares: 'الجوائز',
        bureau: 'المكتب',
        revue: 'المجلة',
        contact: 'اتصل',
        label: 'AR'
    }
};
const mainContent = document.getElementById('main-content');
const sectionContents = {
    fr: {
        accueil: '<h2>Bienvenue sur le site du club Great Debaters EHTP !</h2><p>Découvrez nos activités, notre palmarès et rejoignez-nous !</p>',
        palmares: '<h2>Palmarès</h2><p>Voici les distinctions et prix remportés par notre club.</p>',
        bureau: '<h2>Bureau</h2><p>Rencontrez les membres du bureau du club.</p>',
        revue: '<h2>Revue</h2><p>Consultez nos publications et revues.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>Contactez-nous</h2>
                    <p>Nous sommes là pour répondre à toutes vos questions et collaborations</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Adresse</h3>
                                <p>École Hassania des Travaux Publics<br>Route d'El Jadida, Km 7<br>Casablanca, Maroc</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Email</h3>
                                <p>greatdebaters@ehtp.ac.ma</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Téléphone</h3>
                                <p>+212 5 22 23 34 56</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>Suivez-nous</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
                                <label for="nom">Nom</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required>
                                <label for="prenom">Prénom</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="Votre téléphone" required>
                                <label for="telephone">Téléphone</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Votre email" required>
                                <label for="email">Email</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
                                <label for="message">Message</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>Envoyer le message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>Notre localisation</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    },
    en: {
        accueil: '<h2>Welcome to the Great Debaters EHTP club website!</h2><p>Discover our activities, achievements, and join us!</p>',
        palmares: '<h2>Awards</h2><p>Here are the awards and prizes won by our club.</p>',
        bureau: '<h2>Board</h2><p>Meet the club board members.</p>',
        revue: '<h2>Review</h2><p>Check out our publications and reviews.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>Contact Us</h2>
                    <p>We are here to answer all your questions and collaborations</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Address</h3>
                                <p>Hassania School of Public Works<br>Route d'El Jadida, Km 7<br>Casablanca, Morocco</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Email</h3>
                                <p>greatdebaters@ehtp.ac.ma</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>Phone</h3>
                                <p>+212 5 22 23 34 56</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>Follow Us</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="Your name" required>
                                <label for="nom">Name</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="Your first name" required>
                                <label for="prenom">First Name</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="Your phone" required>
                                <label for="telephone">Phone</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Your email" required>
                                <label for="email">Email</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
                                <label for="message">Message</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>Send Message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>Our Location</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    },
    ar: {
        accueil: '<h2>مرحبًا بكم في موقع نادي المناظرات الكبرى EHTP!</h2><p>اكتشفوا أنشطتنا وإنجازاتنا وانضموا إلينا!</p>',
        palmares: '<h2>الجوائز</h2><p>هذه هي الجوائز والتكريمات التي حصل عليها نادينا.</p>',
        bureau: '<h2>المكتب</h2><p>تعرفوا على أعضاء مكتب النادي.</p>',
        revue: '<h2>المجلة</h2><p>تصفحوا منشوراتنا ومجلاتنا.</p>',
        contact: `
            <section class="contact-section">
                <div class="contact-header">
                    <h2>اتصلوا بنا</h2>
                    <p>نحن هنا للإجابة على جميع أسئلتكم والتعاون معكم</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-details">
                                <h3>العنوان</h3>
                                <p>المدرسة الحسنية للأشغال العمومية<br>طريق الجديدة، كم 7<br>الدار البيضاء، المغرب</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-details">
                                <h3>البريد الإلكتروني</h3>
                                <p>greatdebaters@ehtp.ac.ma</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-details">
                                <h3>الهاتف</h3>
                                <p>+212 5 22 23 34 56</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h3>تابعونا</h3>
                            <div class="social-links">
                                <a href="#" class="social-link facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="social-link linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="social-link twitter">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form-container">
                        <form class="contact-form">
                            <div class="form-group">
                                <input type="text" id="nom" name="nom" placeholder="اسمك" required>
                                <label for="nom">الاسم</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="text" id="prenom" name="prenom" placeholder="اسمك الأول" required>
                                <label for="prenom">الاسم الأول</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="tel" id="telephone" name="telephone" placeholder="هاتفك" required>
                                <label for="telephone">الهاتف</label>
                            </div>
                            
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="بريدك الإلكتروني" required>
                                <label for="email">البريد الإلكتروني</label>
                            </div>
                            
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="رسالتك" rows="5" required></textarea>
                                <label for="message">الرسالة</label>
                            </div>
                            
                            <button type="submit" class="submit-btn">
                                <span>إرسال الرسالة</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="map-container">
                    <h3>موقعنا</h3>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d-7.654321!3d33.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzM2LjAiTiA3wrAzOScxNS41Ilc!5e0!3m2!1sfr!2sma!4v1234567890123" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        `
    }
};
const exploreBtnHTML = {
    fr: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">Explorez</a></div>`,
    en: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">Explore</a></div>`,
    ar: `<div class='explore-btn-wrapper'><a href="#" class="explore-btn">استكشف</a></div>`
};
const carouselHTML = {
    fr: `
        <section id="carousel-section" class="carousel-section">
            <div class="carousel-container">
                <div class="carousel">
                    <div class="carousel-slide active">
                        <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                    </div>
                    <div class="carousel-slide">
                        <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5289.jpg" alt="Photo 3">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5326.jpg" alt="Photo 4">
                    </div>
                </div>
                <button class="carousel-btn prev" aria-label="Précédent">&#10094;</button>
                <button class="carousel-btn next" aria-label="Suivant">&#10095;</button>
            </div>
            <h1 class="carousel-title">Great Debaters EHTP</h1>
            <blockquote class="carousel-quote">« Le débat n'est pas un champ de bataille, mais un atelier d'idées où se forge la compréhension mutuelle »</blockquote>
            ${exploreBtnHTML.fr}
        </section>
    `,
    en: `
        <section id="carousel-section" class="carousel-section">
            <div class="carousel-container">
                <div class="carousel">
                    <div class="carousel-slide active">
                        <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                    </div>
                    <div class="carousel-slide">
                        <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5289.jpg" alt="Photo 3">
                    </div>
                    <div class="carousel-slide">
                        <img src="_52A5326.jpg" alt="Photo 4">
                    </div>
                </div>
                <button class="carousel-btn prev" aria-label="Previous">&#10094;</button>
                <button class="carousel-btn next" aria-label="Next">&#10095;</button>
            </div>
            <h1 class="carousel-title">Great Debaters EHTP</h1>
            <blockquote class="carousel-quote">"Debate is not a battlefield, but a workshop of ideas where mutual understanding is forged."</blockquote>
            ${exploreBtnHTML.en}
        </section>
    `,
    ar: `
        <section id=\"carousel-section\" class=\"carousel-section\">
            <div class=\"carousel-container\">
                <div class=\"carousel\">
                    <div class=\"carousel-slide active\">
                        <img src=\"Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg\" alt=\"الصورة 1\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg\" alt=\"الصورة 2\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"_52A5289.jpg\" alt=\"الصورة 3\">
                    </div>
                    <div class=\"carousel-slide\">
                        <img src=\"_52A5326.jpg\" alt=\"الصورة 4\">
                    </div>
                </div>
                <button class=\"carousel-btn prev\" aria-label=\"السابق\">&#10094;</button>
                <button class=\"carousel-btn next\" aria-label=\"التالي\">&#10095;</button>
            </div>
            <h1 class=\"carousel-title\">Great Debaters EHTP</h1>
            <blockquote class=\"carousel-quote\">« المناظرة ليست ساحة معركة، بل ورشة أفكار يُصاغ فيها الفهم المتبادل »</blockquote>
            ${exploreBtnHTML.ar}
        </section>
    `
};
let langDropdownOpen = false;
let currentLang = 'fr';
let currentSection = 'accueil';
langDropBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langDropdownOpen = !langDropdownOpen;
    langDropdown.style.display = langDropdownOpen ? 'block' : 'none';
    if (langDropdownOpen) {
        langLinks[0].focus();
    }
});
langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
        langDropdownOpen = false;
        langDropdown.style.display = 'none';
        langDropBtn.focus();
    });
    link.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = this.nextElementSibling || langLinks[0];
            next.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = this.previousElementSibling || langLinks[langLinks.length - 1];
            prev.focus();
        } else if (e.key === 'Escape') {
            langDropdownOpen = false;
            langDropdown.style.display = 'none';
            langDropBtn.focus();
        }
    });
});
document.addEventListener('click', function(e) {
    if (langDropdownOpen && !langDropdown.contains(e.target) && !langDropBtn.contains(e.target)) {
        langDropdownOpen = false;
        langDropdown.style.display = 'none';
    }
});
langDropBtn.addEventListener('keydown', function(e) {
    if ((e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') && !langDropdownOpen) {
        e.preventDefault();
        langDropdownOpen = true;
        langDropdown.style.display = 'block';
        langLinks[0].focus();
    } else if (e.key === 'Escape' && langDropdownOpen) {
        langDropdownOpen = false;
        langDropdown.style.display = 'none';
    }
});

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    // Mettre à jour le bouton de langue
    const langBtn = document.querySelector('.lang-dropbtn');
    const langLabel = langBtn.querySelector('.lang-label');
    
    switch(lang) {
        case 'fr':
            langLabel.textContent = 'FR';
            break;
        case 'ar':
            langLabel.textContent = 'AR';
            break;
        case 'en':
            langLabel.textContent = 'EN';
            break;
    }
    
    // Traduire le contenu principal
    translateContent(lang);
    
    // Le footer reste toujours en français et LTR, sauf le copyright et liens légaux
    const footer = document.querySelector('.footer');
    if (footer) {
        // Appliquer la direction selon la langue
        if (lang === 'ar') {
            footer.style.direction = 'rtl';
            footer.style.textAlign = 'right';
        } else {
            footer.style.direction = 'ltr';
            footer.style.textAlign = 'left';
        }
        
        // Traduire seulement le copyright et les liens légaux
        const copyright = footer.querySelector('.copyright');
        const legalLinks = footer.querySelectorAll('.legal-link');
        
        // Traduire aussi les titres des sections du footer
        const footerTitles = footer.querySelectorAll('.footer-section h4');
        
        // Traduire le contenu des sections du footer
        const footerLinks = footer.querySelectorAll('.footer-links a');
        const footerContact = footer.querySelectorAll('.footer-contact p');
        const footerDescription = footer.querySelector('.footer-description');
        
        const footerTranslations = {
            fr: {
                'copyright': '© 2024 Great Debaters EHTP. Tous droits réservés.',
                'privacy': 'Politique de confidentialité',
                'terms': 'Conditions d\'utilisation',
                'legal': 'Mentions légales',
                'quick-links': 'Liens Rapides',
                'contact': 'Contact',
                'follow-us': 'Suivez-nous',
                'description': 'Club de débat d\'excellence de l\'École Hassania des Travaux Publics, formant les leaders de demain à travers l\'art de la persuasion et de l\'éloquence.',
                'accueil': 'Accueil',
                'palmares': 'Palmarès',
                'bureau': 'Bureau',
                'revue': 'Revue',
                'contact': 'Contact',
                'address-text': 'EHTP, Route d\'El Jadida, Casablanca',
                'email-text': 'greatdebaters@ehtp.ac.ma',
                'phone-text': '+212 5 22 23 34 56'
            },
            ar: {
                'copyright': '© 2024 Great Debaters EHTP. جميع الحقوق محفوظة.',
                'privacy': 'سياسة الخصوصية',
                'terms': 'شروط الاستخدام',
                'legal': 'الإشعارات القانونية',
                'quick-links': 'روابط سريعة',
                'contact': 'اتصل بنا',
                'follow-us': 'تابعونا',
                'description': 'نادي مناظرة التميز في المدرسة الحسنية للأشغال العمومية، نُشكل قادة الغد من خلال فن الإقناع والبلاغة.',
                'accueil': 'الرئيسية',
                'palmares': 'الإنجازات',
                'bureau': 'المكتب',
                'revue': 'المجلة',
                'contact': 'اتصل بنا',
                'address-text': 'المدرسة الحسنية للأشغال العمومية، طريق الجديدة، الدار البيضاء',
                'email-text': 'greatdebaters@ehtp.ac.ma',
                'phone-text': '+212 5 22 23 34 56'
            },
            en: {
                'copyright': '© 2024 Great Debaters EHTP. All rights reserved.',
                'privacy': 'Privacy Policy',
                'terms': 'Terms of Use',
                'legal': 'Legal Notices',
                'quick-links': 'Quick Links',
                'contact': 'Contact',
                'follow-us': 'Follow Us'
            }
        };
        
        if (copyright) {
            copyright.textContent = footerTranslations[lang]['copyright'];
        }
        
        legalLinks.forEach((link, index) => {
            if (index === 0) link.textContent = footerTranslations[lang]['privacy'];
            if (index === 1) link.textContent = footerTranslations[lang]['terms'];
            if (index === 2) link.textContent = footerTranslations[lang]['legal'];
        });
        
        // Traduire les titres des sections du footer
        footerTitles.forEach((title, index) => {
            if (index === 1) title.textContent = footerTranslations[lang]['quick-links'];
            if (index === 2) title.textContent = footerTranslations[lang]['contact'];
            if (index === 3) title.textContent = footerTranslations[lang]['follow-us'];
        });
        
        // Traduire la description
        if (footerDescription) {
            footerDescription.textContent = footerTranslations[lang]['description'];
        }
        
        // Traduire les liens de navigation
        footerLinks.forEach((link, index) => {
            if (index === 0) link.textContent = footerTranslations[lang]['accueil'];
            if (index === 1) link.textContent = footerTranslations[lang]['palmares'];
            if (index === 2) link.textContent = footerTranslations[lang]['bureau'];
            if (index === 3) link.textContent = footerTranslations[lang]['revue'];
            if (index === 4) link.textContent = footerTranslations[lang]['contact'];
        });
        
        // Traduire les informations de contact
        footerContact.forEach((contact, index) => {
            const textContent = contact.textContent;
            if (textContent.includes('EHTP, Route d\'El Jadida')) {
                contact.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${footerTranslations[lang]['address-text']}`;
            } else if (textContent.includes('greatdebaters@ehtp.ac.ma')) {
                contact.innerHTML = `<i class="fas fa-envelope"></i> ${footerTranslations[lang]['email-text']}`;
            } else if (textContent.includes('+212 5 22 23 34 56')) {
                contact.innerHTML = `<i class="fas fa-phone"></i> ${footerTranslations[lang]['phone-text']}`;
            }
        });
        
        // Appliquer la direction RTL/LTR à tous les éléments du footer
        const footerElements = footer.querySelectorAll('*');
        footerElements.forEach(element => {
            if (lang === 'ar') {
                element.style.direction = 'rtl';
                element.style.textAlign = 'right';
            } else {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            }
        });
        
        // Ajouter la navigation pour les liens rapides du footer
        const footerNavigationLinks = footer.querySelectorAll('.footer-links a');
        footerNavigationLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                
                // Mettre à jour la navigation active
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                const activeNavItem = document.querySelector(`[data-section="${section}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
                
                // Charger le contenu de la section
                if (section === 'accueil') {
                    const mainContent = document.getElementById('main-content');
                    mainContent.innerHTML = `
                        <section id="carousel-section" class="carousel-section">
                            <div class="carousel-container">
                                <div class="carousel">
                                    <div class="carousel-slide active">
                                        <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="_52A5289.jpg" alt="Photo 3">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="_52A5326.jpg" alt="Photo 4">
                                    </div>
                                    <div class="carousel-slide">
                                        <img src="Capture d'écran 2025-07-19 034957.png" alt="Photo 5">
                                    </div>
                                </div>
                                <button class="carousel-btn prev" aria-label="Précédent">&#10094;</button>
                                <button class="carousel-btn next" aria-label="Suivant">&#10095;</button>
                            </div>
                            <h1 class="carousel-title">Great Debaters EHTP</h1>
                            <div class="quote-container">
                                <div class="quote-decoration left-decoration">
                                    <i class="fas fa-feather-alt"></i>
                                </div>
                                <blockquote class="carousel-quote">« Le débat n'est pas un champ de bataille, mais un atelier d'idées où se forge la compréhension mutuelle »</blockquote>
                                <div class="quote-decoration right-decoration">
                                    <i class="fas fa-bolt"></i>
                                </div>
                            </div>
                            
                            <div class="explore-btn-wrapper">
                                <button class="explore-btn">
                                    <span>Explorer</span>
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </section>
                    `;
                    initCarousel();
                    translateContent(lang);
                } else if (section === 'contact') {
                    renderContactSection(lang);
                } else if (section === 'palmares') {
                    const mainContent = document.getElementById('main-content');
                    mainContent.innerHTML = `
                        <section class="palmares-section">
                            <div class="palmares-header">
                                <h2>Palmarès</h2>
                                <p>Découvrez nos réalisations et nos trophées</p>
                            </div>
                            <div class="palmares-content">
                                <div class="achievement-card">
                                    <div class="achievement-icon">
                                        <i class="fas fa-trophy"></i>
                                    </div>
                                    <h3>Championnat National 2023</h3>
                                    <p>Première place au championnat national de débat</p>
                                </div>
                                <div class="achievement-card">
                                    <div class="achievement-icon">
                                        <i class="fas fa-medal"></i>
                                    </div>
                                    <h3>Tournoi International</h3>
                                    <p>Finaliste au tournoi international de débat</p>
                                </div>
                                <div class="achievement-card">
                                    <div class="achievement-icon">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h3>Excellence Académique</h3>
                                    <p>Reconnaissance pour l'excellence académique</p>
                                </div>
                            </div>
                        </section>
                    `;
                } else if (section === 'bureau') {
                    const mainContent = document.getElementById('main-content');
                    mainContent.innerHTML = `
                        <section class="bureau-section">
                            <div class="bureau-header">
                                <h2>Bureau</h2>
                                <p>Rencontrez notre équipe dirigeante</p>
                            </div>
                            <div class="bureau-content">
                                <div class="bureau-member-card">
                                    <div class="member-avatar">
                                        <i class="fas fa-user-tie"></i>
                                    </div>
                                    <h3>Président</h3>
                                    <p class="member-name">NADAHE Mohammed</p>
                                </div>
                                <div class="bureau-member-card">
                                    <div class="member-avatar">
                                        <i class="fas fa-user-graduate"></i>
                                    </div>
                                    <h3>Vice-Président</h3>
                                    <p class="member-name">EL KHADIRI Douae</p>
                                </div>
                                <div class="bureau-member-card">
                                    <div class="member-avatar">
                                        <i class="fas fa-user-edit"></i>
                                    </div>
                                    <h3>Secrétaire Général</h3>
                                    <p class="member-name">Ahmed Fouad Goughelt</p>
                                </div>
                            </div>
                        </section>
                    `;
                } else if (section === 'revue') {
                    const mainContent = document.getElementById('main-content');
                    mainContent.innerHTML = `
                        <section class="revue-section">
                            <div class="revue-header">
                                <h2>Revue</h2>
                                <p>Nos publications et articles</p>
                            </div>
                            <div class="revue-content">
                                <div class="article-card">
                                    <h3>L'Art du Débat</h3>
                                    <p>Guide complet sur les techniques de débat</p>
                                </div>
                                <div class="article-card">
                                    <h3>Éloquence et Persuasion</h3>
                                    <p>Les secrets de l'art oratoire</p>
                                </div>
                                <div class="article-card">
                                    <h3>Actualités du Club</h3>
                                    <p>Les dernières nouvelles de Great Debaters</p>
                                </div>
                            </div>
                        </section>
                    `;
                }
                
                // Scroll vers le haut de la page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
        
        // Permettre aux liens des réseaux sociaux d'ouvrir les vrais liens
        const socialLinks = footer.querySelectorAll('.social-icon');
        socialLinks.forEach(link => {
            // Supprimer preventDefault pour permettre l'ouverture des liens
            link.addEventListener('click', function(e) {
                // Laisser le lien s'ouvrir normalement
                // Pas de preventDefault ici
            });
        });
    }
}

// Fonction pour traduire le contenu
function translateContent(lang) {
    const translations = {
        fr: {
            'accueil': 'Accueil',
            'palmares': 'Palmarès',
            'bureau': 'Bureau',
            'revue': 'Revue',
            'contact': 'Contact',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '« Le débat n\'est pas un champ de bataille, mais un atelier d\'idées où se forge la compréhension mutuelle »',
            'contact-title': 'Contactez-nous',
            'contact-subtitle': 'Nous sommes là pour répondre à toutes vos questions et collaborations',
            'address': 'Adresse',
            'address-text': 'École Hassania des Travaux Publics<br>Route d\'El Jadida, Km 7<br>Casablanca, Maroc',
            'email': 'Email',
            'phone': 'Téléphone',
            'follow-us': 'Suivez-nous',
            'location': 'Notre localisation',
            'name': 'Nom',
            'firstname': 'Prénom',
            'telephone': 'Téléphone',
            'message': 'Message',
            'send-message': 'Envoyer le message',
            'name-placeholder': 'Votre nom',
            'firstname-placeholder': 'Votre prénom',
            'telephone-placeholder': 'Votre téléphone',
            'email-placeholder': 'Votre email',
            'message-placeholder': 'Votre message',
            'executive-bureau': 'Bureau Exécutif',
            'president': 'Président',
            'vice-president': 'Vice-Président',
            'secretary-general': 'Secrétaire Général',
            'explore': 'Explorer'
        },
        ar: {
            'accueil': 'الرئيسية',
            'palmares': 'الإنجازات',
            'bureau': 'المكتب',
            'revue': 'المجلة',
            'contact': 'اتصل بنا',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '« النقاش ليس ساحة معركة، بل ورشة أفكار حيث تُشكّل الفهم المتبادل »',
            'contact-title': 'اتصل بنا',
            'contact-subtitle': 'نحن هنا للإجابة على جميع أسئلتكم وتعاونكم',
            'address': 'العنوان',
            'address-text': 'المدرسة الحسنية للأشغال العمومية<br>طريق الجديدة، كم 7<br>الدار البيضاء، المغرب',
            'email': 'البريد الإلكتروني',
            'phone': 'الهاتف',
            'follow-us': 'تابعونا',
            'location': 'موقعنا',
            'name': 'الاسم',
            'firstname': 'الاسم الأول',
            'telephone': 'الهاتف',
            'message': 'الرسالة',
            'send-message': 'إرسال الرسالة',
            'name-placeholder': 'اسمك',
            'firstname-placeholder': 'اسمك الأول',
            'telephone-placeholder': 'هاتفك',
            'email-placeholder': 'بريدك الإلكتروني',
            'message-placeholder': 'رسالتك',
            'executive-bureau': 'المكتب التنفيذي',
            'president': 'الرئيس',
            'vice-president': 'نائب الرئيس',
            'secretary-general': 'الأمين العام',
            'explore': 'استكشف'
        },
        en: {
            'accueil': 'Home',
            'palmares': 'Achievements',
            'bureau': 'Board',
            'revue': 'Magazine',
            'contact': 'Contact',
            'carousel-title': 'Great Debaters EHTP',
            'carousel-quote': '"Debate is not a battlefield, but a workshop of ideas where mutual understanding is forged"',
            'contact-title': 'Contact Us',
            'contact-subtitle': 'We are here to answer all your questions and collaborations',
            'address': 'Address',
            'address-text': 'École Hassania des Travaux Publics<br>Route d\'El Jadida, Km 7<br>Casablanca, Morocco',
            'email': 'Email',
            'phone': 'Phone',
            'follow-us': 'Follow Us',
            'location': 'Our Location',
            'name': 'Name',
            'firstname': 'First Name',
            'telephone': 'Phone',
            'message': 'Message',
            'send-message': 'Send Message',
            'name-placeholder': 'Your name',
            'firstname-placeholder': 'Your first name',
            'telephone-placeholder': 'Your phone',
            'email-placeholder': 'Your email',
            'message-placeholder': 'Your message',
            'executive-bureau': 'Executive Board',
            'president': 'President',
            'vice-president': 'Vice-President',
            'secretary-general': 'Secretary General',
            'explore': 'Explore'
        }
    };
    
    // Appliquer la direction du texte selon la langue
    const body = document.body;
    if (lang === 'ar') {
        body.style.direction = 'rtl';
        body.style.textAlign = 'right';
    } else {
        body.style.direction = 'ltr';
        body.style.textAlign = 'left';
    }
    
    // Traduire la navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (translations[lang][section]) {
            item.textContent = translations[lang][section];
        }
    });
    
    // Traduire le titre du carousel
    const carouselTitle = document.querySelector('.carousel-title');
    if (carouselTitle) {
        carouselTitle.textContent = translations[lang]['carousel-title'];
    }
    
    // Traduire la citation du carousel
    const carouselQuote = document.querySelector('.carousel-quote');
    if (carouselQuote) {
        carouselQuote.innerHTML = translations[lang]['carousel-quote'];
    }
    
    // Traduire le bouton Explore
    const exploreBtn = document.querySelector('.explore-btn span');
    if (exploreBtn) {
        exploreBtn.textContent = translations[lang]['explore'];
    }
    
    // Traduire le contenu de la section contact si elle est active
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const contactTitle = contactSection.querySelector('.contact-header h2');
        if (contactTitle) {
            contactTitle.textContent = translations[lang]['contact-title'];
        }
        
        const contactSubtitle = contactSection.querySelector('.contact-header p');
        if (contactSubtitle) {
            contactSubtitle.textContent = translations[lang]['contact-subtitle'];
        }
        
        // Traduire les cartes de contact
        const contactCards = contactSection.querySelectorAll('.contact-card');
        contactCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const content = card.querySelector('p');
            
            if (index === 0 && title) title.textContent = translations[lang]['address'];
            if (index === 0 && content) content.innerHTML = translations[lang]['address-text'];
            if (index === 1 && title) title.textContent = translations[lang]['email'];
            if (index === 2 && title) title.textContent = translations[lang]['phone'];
        });
        
        // Traduire les réseaux sociaux
        const socialTitle = contactSection.querySelector('.social-media h3');
        if (socialTitle) {
            socialTitle.textContent = translations[lang]['follow-us'];
        }
        
        // Traduire la carte
        const mapTitle = contactSection.querySelector('.map-container h3');
        if (mapTitle) {
            mapTitle.textContent = translations[lang]['location'];
        }
        
        // Traduire le formulaire
        const formLabels = contactSection.querySelectorAll('.form-group label');
        const formInputs = contactSection.querySelectorAll('.form-group input, .form-group textarea');
        
        formLabels.forEach((label, index) => {
            if (index === 0) label.textContent = translations[lang]['name'];
            if (index === 1) label.textContent = translations[lang]['firstname'];
            if (index === 2) label.textContent = translations[lang]['telephone'];
            if (index === 3) label.textContent = translations[lang]['email'];
            if (index === 4) label.textContent = translations[lang]['message'];
        });
        
        formInputs.forEach((input, index) => {
            if (index === 0) input.placeholder = translations[lang]['name-placeholder'];
            if (index === 1) input.placeholder = translations[lang]['firstname-placeholder'];
            if (index === 2) input.placeholder = translations[lang]['telephone-placeholder'];
            if (index === 3) input.placeholder = translations[lang]['email-placeholder'];
            if (index === 4) input.placeholder = translations[lang]['message-placeholder'];
        });
        
        // Traduire le bouton d'envoi
        const submitBtn = contactSection.querySelector('.submit-btn span');
        if (submitBtn) {
            submitBtn.textContent = translations[lang]['send-message'];
        }
        
        // Traduire la section bureau exécutif
        const bureauTitle = contactSection.querySelector('.executive-bureau h3');
        if (bureauTitle) {
            bureauTitle.textContent = translations[lang]['executive-bureau'];
        }
        
        const bureauMembers = contactSection.querySelectorAll('.bureau-member');
        bureauMembers.forEach((member, index) => {
            const memberTitle = member.querySelector('h4');
            if (index === 0 && memberTitle) memberTitle.textContent = translations[lang]['president'];
            if (index === 1 && memberTitle) memberTitle.textContent = translations[lang]['vice-president'];
            if (index === 2 && memberTitle) memberTitle.textContent = translations[lang]['secretary-general'];
        });
        
        // Appliquer la direction RTL/LTR à la section contact
        if (lang === 'ar') {
            contactSection.style.direction = 'rtl';
            contactSection.style.textAlign = 'right';
            
            // Appliquer RTL à tous les éléments de la section contact
            const contactElements = contactSection.querySelectorAll('*');
            contactElements.forEach(element => {
                element.style.direction = 'rtl';
                element.style.textAlign = 'right';
            });
        } else {
            contactSection.style.direction = 'ltr';
            contactSection.style.textAlign = 'left';
            
            // Appliquer LTR à tous les éléments de la section contact
            const contactElements = contactSection.querySelectorAll('*');
            contactElements.forEach(element => {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            });
        }
    }
    
    // Le footer reste toujours en français et LTR, sauf le copyright et liens légaux
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.direction = 'ltr';
        footer.style.textAlign = 'left';
        
        // Traduire seulement le copyright et les liens légaux
        const copyright = footer.querySelector('.copyright');
        const legalLinks = footer.querySelectorAll('.legal-link');
        
        // Traduire aussi les titres des sections du footer
        const footerTitles = footer.querySelectorAll('.footer-section h4');
        
        const footerTranslations = {
            fr: {
                'copyright': '© 2024 Great Debaters EHTP. Tous droits réservés.',
                'privacy': 'Politique de confidentialité',
                'terms': 'Conditions d\'utilisation',
                'legal': 'Mentions légales',
                'quick-links': 'Liens Rapides',
                'contact': 'Contact',
                'follow-us': 'Suivez-nous'
            },
            ar: {
                'copyright': '© 2024 Great Debaters EHTP. جميع الحقوق محفوظة.',
                'privacy': 'سياسة الخصوصية',
                'terms': 'شروط الاستخدام',
                'legal': 'الإشعارات القانونية',
                'quick-links': 'روابط سريعة',
                'contact': 'اتصل بنا',
                'follow-us': 'تابعونا'
            },
            en: {
                'copyright': '© 2024 Great Debaters EHTP. All rights reserved.',
                'privacy': 'Privacy Policy',
                'terms': 'Terms of Use',
                'legal': 'Legal Notices',
                'quick-links': 'Quick Links',
                'contact': 'Contact',
                'follow-us': 'Follow Us'
            }
        };
        
        if (copyright) {
            copyright.textContent = footerTranslations[lang]['copyright'];
        }
        
        legalLinks.forEach((link, index) => {
            if (index === 0) link.textContent = footerTranslations[lang]['privacy'];
            if (index === 1) link.textContent = footerTranslations[lang]['terms'];
            if (index === 2) link.textContent = footerTranslations[lang]['legal'];
        });
        
        // Traduire les titres des sections du footer
        footerTitles.forEach((title, index) => {
            if (index === 1) title.textContent = footerTranslations[lang]['quick-links'];
            if (index === 2) title.textContent = footerTranslations[lang]['contact'];
            if (index === 3) title.textContent = footerTranslations[lang]['follow-us'];
        });
        
        // S'assurer que tous les autres éléments du footer restent en français
        const footerElements = footer.querySelectorAll('*');
        footerElements.forEach(element => {
            if (!element.classList.contains('copyright') && !element.classList.contains('legal-link')) {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            }
        });
    }
}

// Fonction pour rendre la section Contact
function renderContactSection(lang) {
    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('contact-template');
    if (!template) return;
    
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    
    // Traduction dynamique des labels et textes
    const translations = {
        fr: {
            h2: 'Contactez-nous',
            p: 'Nous sommes là pour répondre à toutes vos questions et collaborations',
            adresse: 'Adresse',
            email: 'Email',
            telephone: 'Téléphone',
            nom: 'Nom',
            prenom: 'Prénom',
            message: 'Message',
            envoyer: 'Envoyer le message',
            localisation: 'Notre localisation',
            feedback: 'Merci pour votre message ! Nous vous répondrons rapidement.',
            error: 'Veuillez remplir tous les champs correctement.'
        },
        en: {
            h2: 'Contact Us',
            p: 'We are here to answer all your questions and collaborations',
            adresse: 'Address',
            email: 'Email',
            telephone: 'Phone',
            nom: 'Name',
            prenom: 'First Name',
            message: 'Message',
            envoyer: 'Send Message',
            localisation: 'Our Location',
            feedback: 'Thank you for your message! We will get back to you soon.',
            error: 'Please fill all fields correctly.'
        },
        ar: {
            h2: 'اتصلوا بنا',
            p: 'نحن هنا للإجابة على جميع أسئلتكم والتعاون معكم',
            adresse: 'العنوان',
            email: 'البريد الإلكتروني',
            telephone: 'الهاتف',
            nom: 'الاسم',
            prenom: 'الاسم الأول',
            message: 'الرسالة',
            envoyer: 'إرسال الرسالة',
            localisation: 'موقعنا',
            feedback: 'شكرًا لرسالتكم! سنرد عليكم قريبًا.',
            error: 'يرجى ملء جميع الحقول بشكل صحيح.'
        }
    };
    
    const t = translations[lang] || translations.fr;
    
    // Appliquer les traductions
    const header = document.querySelector('.contact-header');
    if (header) {
        header.querySelector('h2').textContent = t.h2;
        header.querySelector('p').textContent = t.p;
    }
    
    const details = document.querySelectorAll('.contact-details h3');
    if (details.length >= 3) {
        details[0].textContent = t.adresse;
        details[1].textContent = t.email;
        details[2].textContent = t.telephone;
    }
    
    const labels = document.querySelectorAll('label');
    if (labels.length >= 5) {
        labels[0].textContent = t.nom;
        labels[1].textContent = t.prenom;
        labels[2].textContent = t.telephone;
        labels[3].textContent = t.email;
        labels[4].textContent = t.message;
    }
    
    const submitBtn = document.querySelector('.submit-btn span');
    if (submitBtn) submitBtn.textContent = t.envoyer;
    
    const mapTitle = document.querySelector('.map-container h3');
    if (mapTitle) mapTitle.textContent = t.localisation;
    
    // Validation et feedback du formulaire
    const form = document.querySelector('.contact-form');
    const feedback = document.querySelector('.form-feedback');
    
    if (form && feedback) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (form.checkValidity()) {
                feedback.textContent = t.feedback;
                feedback.style.display = 'block';
                feedback.style.color = '#27ae60';
                feedback.style.background = '#d5f4e6';
                feedback.style.padding = '12px';
                feedback.style.borderRadius = '8px';
                feedback.style.marginTop = '16px';
                form.reset();
                setTimeout(() => { 
                    feedback.style.display = 'none'; 
                }, 4000);
            } else {
                feedback.textContent = t.error;
                feedback.style.display = 'block';
                feedback.style.color = '#c0392b';
                feedback.style.background = '#fadbd8';
                feedback.style.padding = '12px';
                feedback.style.borderRadius = '8px';
                feedback.style.marginTop = '16px';
            }
        });
    }
}

function updateMainContent() {
    if (mainContent) {
        if(currentSection === 'accueil') {
            mainContent.innerHTML = carouselHTML[currentLang];
            initCarousel();
        } else if(currentSection === 'contact') {
            renderContactSection(currentLang);
        } else if (sectionContents[currentLang][currentSection]) {
            mainContent.innerHTML = sectionContents[currentLang][currentSection];
        }
    }
}
// Navigation depuis la navbar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        
        // Mettre à jour la navigation active
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
        
        // Charger le contenu de la section
        if (section === 'accueil') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section id="carousel-section" class="carousel-section">
                    <div class="carousel-container">
                        <div class="carousel">
                            <div class="carousel-slide active">
                                <img src="Screenshot_2025-07-17-15-54-08-143_com.whatsapp-edit.jpg" alt="Photo 1">
                            </div>
                            <div class="carousel-slide">
                                <img src="Screenshot_2025-07-17-15-53-18-509_com.android.chrome-edit.jpg" alt="Photo 2">
                            </div>
                            <div class="carousel-slide">
                                <img src="_52A5289.jpg" alt="Photo 3">
                            </div>
                            <div class="carousel-slide">
                                <img src="_52A5326.jpg" alt="Photo 4">
                            </div>
                            <div class="carousel-slide">
                                <img src="Capture d'écran 2025-07-19 034957.png" alt="Photo 5">
                            </div>
                        </div>
                        <button class="carousel-btn prev" aria-label="Précédent">&#10094;</button>
                        <button class="carousel-btn next" aria-label="Suivant">&#10095;</button>
                    </div>
                    <h1 class="carousel-title">Great Debaters EHTP</h1>
                    <div class="quote-container">
                        <div class="quote-decoration left-decoration">
                            <i class="fas fa-feather-alt"></i>
                        </div>
                        <blockquote class="carousel-quote">« Le débat n'est pas un champ de bataille, mais un atelier d'idées où se forge la compréhension mutuelle »</blockquote>
                        <div class="quote-decoration right-decoration">
                            <i class="fas fa-bolt"></i>
                        </div>
                    </div>
                    
                    <div class="explore-btn-wrapper">
                        <button class="explore-btn">
                            <span>Explorer</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </section>
            `;
            initCarousel();
            translateContent(currentLang);
        } else if (section === 'contact') {
            renderContactSection(currentLang);
        } else if (section === 'palmares') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section class="palmares-section">
                    <div class="palmares-header">
                        <h2>Palmarès</h2>
                        <p>Découvrez nos réalisations et nos trophées</p>
                    </div>
                    <div class="palmares-content">
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <h3>Championnat National 2023</h3>
                            <p>Première place au championnat national de débat</p>
                        </div>
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3>Tournoi International</h3>
                            <p>Finaliste au tournoi international de débat</p>
                        </div>
                        <div class="achievement-card">
                            <div class="achievement-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>Excellence Académique</h3>
                            <p>Reconnaissance pour l'excellence académique</p>
                        </div>
                    </div>
                </section>
            `;
        } else if (section === 'bureau') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section class="bureau-section">
                    <div class="bureau-header">
                        <h2>Bureau</h2>
                        <p>Rencontrez notre équipe dirigeante</p>
                    </div>
                    <div class="bureau-content">
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h3>Président</h3>
                            <p class="member-name">NADAHE Mohammed</p>
                        </div>
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-graduate"></i>
                            </div>
                            <h3>Vice-Président</h3>
                            <p class="member-name">EL KHADIRI Douae</p>
                        </div>
                        <div class="bureau-member-card">
                            <div class="member-avatar">
                                <i class="fas fa-user-edit"></i>
                            </div>
                            <h3>Secrétaire Général</h3>
                            <p class="member-name">Ahmed Fouad Goughelt</p>
                        </div>
                    </div>
                </section>
            `;
        } else if (section === 'revue') {
            const mainContent = document.getElementById('main-content');
            mainContent.innerHTML = `
                <section class="revue-section">
                    <div class="revue-header">
                        <h2>Revue</h2>
                        <p>Nos publications et articles</p>
                    </div>
                    <div class="revue-content">
                        <div class="article-card">
                            <h3>L'Art du Débat</h3>
                            <p>Guide complet sur les techniques de débat</p>
                        </div>
                        <div class="article-card">
                            <h3>Éloquence et Persuasion</h3>
                            <p>Les secrets de l'art oratoire</p>
                        </div>
                        <div class="article-card">
                            <h3>Actualités du Club</h3>
                            <p>Les dernières nouvelles de Great Debaters</p>
                        </div>
                    </div>
                </section>
            `;
        }
        
        // Scroll vers le haut de la page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Fonction pour charger la section définition du club
function loadDefinitionSection() {
    const mainContent = document.getElementById('main-content');
    const template = document.getElementById('definition-template');
    if (!template) return;
    
    mainContent.innerHTML = '';
    mainContent.appendChild(template.content.cloneNode(true));
    
    // Créer le graphique après le chargement du contenu
    setTimeout(() => {
        createMembersChart();
    }, 100);
    
    // Traduire le contenu selon la langue actuelle
    translateDefinitionContent(currentLang);
}

// Fonction pour traduire le contenu de la section définition
function translateDefinitionContent(lang) {
    const translations = {
        fr: {
            title: 'Great Debaters EHTP',
            subtitle: 'L\'Excellence du Débat à l\'École Hassania des Travaux Publics',
            mission: 'Notre Mission',
            missionText: 'Former les leaders de demain à travers l\'art de la persuasion, de l\'éloquence et du débat constructif. Nous développons les compétences oratoires, la pensée critique et l\'esprit d\'équipe de nos membres.',
            vision: 'Notre Vision',
            visionText: 'Devenir la référence nationale en matière de débat académique et de formation en leadership, en créant une communauté d\'orateurs éloquents et de penseurs critiques qui contribuent au développement de la société.',
            values: 'Nos Valeurs',
            excellence: 'Excellence :',
            excellenceText: 'Recherche constante de la perfection dans nos performances',
            respect: 'Respect :',
            respectText: 'Écoute active et considération des opinions d\'autrui',
            innovation: 'Innovation :',
            innovationText: 'Créativité dans nos approches et méthodes',
            solidarity: 'Solidarité :',
            solidarityText: 'Esprit d\'équipe et soutien mutuel',
            integrity: 'Intégrité :',
            integrityText: 'Honnêteté et éthique dans nos débats',
            stats: 'Nos Chiffres Clés',
            years: 'Années d\'Excellence',
            yearsDesc: 'Depuis notre création en 2019',
            members: 'Membres Actifs',
            membersDesc: 'Étudiants formés chaque année',
            trophies: 'Trophées Gagnés',
            trophiesDesc: 'Tournois nationaux et internationaux',
            chart: 'Évolution du Nombre de Membres',
            chartDesc: 'Cette courbe montre l\'évolution du nombre de nouveaux membres qui rejoignent le club Great Debaters EHTP chaque année, démontrant notre croissance constante et notre attractivité croissante auprès des étudiants.',
            activities: 'Nos Activités',
            debates: 'Débats Réguliers',
            debatesText: 'Sessions hebdomadaires de débat sur des sujets d\'actualité, politiques, économiques et sociaux.',
            competitions: 'Compétitions',
            competitionsText: 'Participation aux tournois nationaux et internationaux de débat avec un palmarès exceptionnel.',
            training: 'Formation',
            trainingText: 'Ateliers de formation en techniques de débat, éloquence et art oratoire pour tous les niveaux.',
            events: 'Événements',
            eventsText: 'Organisation de conférences, tables rondes et événements culturels ouverts à la communauté.',
            joinUs: 'Rejoignez-nous',
            whyJoin: 'Pourquoi nous rejoindre ?',
            benefits: [
                'Développement de compétences oratoires exceptionnelles',
                'Participation à des compétitions nationales et internationales',
                'Formation continue en techniques de débat',
                'Réseau de professionnels et d\'anciens membres',
                'Opportunités de leadership et de prise de responsabilités',
                'Certificats et reconnaissances académiques'
            ],
            howToJoin: 'Comment nous rejoindre ?',
            joinText: 'Les inscriptions sont ouvertes à tous les étudiants de l\'EHTP. Contactez-nous pour plus d\'informations sur nos sessions d\'essai et nos programmes de formation.',
            contactUs: 'Nous Contacter'
        },
        en: {
            title: 'Great Debaters EHTP',
            subtitle: 'Debate Excellence at the Hassania School of Public Works',
            mission: 'Our Mission',
            missionText: 'To train tomorrow\'s leaders through the art of persuasion, eloquence, and constructive debate. We develop oratory skills, critical thinking, and team spirit in our members.',
            vision: 'Our Vision',
            visionText: 'To become the national reference in academic debate and leadership training, creating a community of eloquent speakers and critical thinkers who contribute to society\'s development.',
            values: 'Our Values',
            excellence: 'Excellence:',
            excellenceText: 'Constant pursuit of perfection in our performances',
            respect: 'Respect:',
            respectText: 'Active listening and consideration of others\' opinions',
            innovation: 'Innovation:',
            innovationText: 'Creativity in our approaches and methods',
            solidarity: 'Solidarity:',
            solidarityText: 'Team spirit and mutual support',
            integrity: 'Integrity:',
            integrityText: 'Honesty and ethics in our debates',
            stats: 'Our Key Figures',
            years: 'Years of Excellence',
            yearsDesc: 'Since our creation in 2019',
            members: 'Active Members',
            membersDesc: 'Students trained each year',
            trophies: 'Won Trophies',
            trophiesDesc: 'National and international tournaments',
            chart: 'Members Evolution',
            chartDesc: 'This curve shows the evolution of the number of new members joining the Great Debaters EHTP club each year, demonstrating our constant growth and increasing attractiveness to students.',
            activities: 'Our Activities',
            debates: 'Regular Debates',
            debatesText: 'Weekly debate sessions on current political, economic, and social topics.',
            competitions: 'Competitions',
            competitionsText: 'Participation in national and international debate tournaments with an exceptional track record.',
            training: 'Training',
            trainingText: 'Workshops in debate techniques, eloquence, and public speaking for all levels.',
            events: 'Events',
            eventsText: 'Organization of conferences, round tables, and cultural events open to the community.',
            joinUs: 'Join Us',
            whyJoin: 'Why join us?',
            benefits: [
                'Development of exceptional oratory skills',
                'Participation in national and international competitions',
                'Continuous training in debate techniques',
                'Network of professionals and alumni',
                'Leadership opportunities and responsibility-taking',
                'Certificates and academic recognition'
            ],
            howToJoin: 'How to join us?',
            joinText: 'Registrations are open to all EHTP students. Contact us for more information about our trial sessions and training programs.',
            contactUs: 'Contact Us'
        },
        ar: {
            title: 'Great Debaters EHTP',
            subtitle: 'التميز في المناظرة في المدرسة الحسنية للأشغال العمومية',
            mission: 'مهمتنا',
            missionText: 'تدريب قادة الغد من خلال فن الإقناع والبلاغة والمناظرة البناءة. نطور المهارات الخطابية والتفكير النقدي وروح الفريق لدى أعضائنا.',
            vision: 'رؤيتنا',
            visionText: 'أن نصبح المرجع الوطني في المناظرة الأكاديمية وتدريب القيادة، من خلال إنشاء مجتمع من المتحدثين البليغين والمفكرين النقديين الذين يساهمون في تطوير المجتمع.',
            values: 'قيمنا',
            excellence: 'التميز:',
            excellenceText: 'السعي المستمر للكمال في أدائنا',
            respect: 'الاحترام:',
            respectText: 'الاستماع النشط والاعتبار لآراء الآخرين',
            innovation: 'الابتكار:',
            innovationText: 'الإبداع في نهجنا وطرقنا',
            solidarity: 'التضامن:',
            solidarityText: 'روح الفريق والدعم المتبادل',
            integrity: 'النزاهة:',
            integrityText: 'الصدق والأخلاق في مناظراتنا',
            stats: 'أرقامنا المهمة',
            years: 'سنوات التميز',
            yearsDesc: 'منذ إنشائنا في 2019',
            members: 'أعضاء نشطون',
            membersDesc: 'طلاب مدربون كل سنة',
            trophies: 'ميداليات فازنا بها',
            trophiesDesc: 'بطولات وطنية ودولية',
            chart: 'تطور عدد الأعضاء',
            chartDesc: 'هذا المنحنى يوضح تطور عدد الأعضاء الجدد الذين ينضمون إلى نادي Great Debaters EHTP كل سنة، مما يوضح نمونا المستمر وجاذبيتنا المتزايدة للطلاب.',
            activities: 'أنشطتنا',
            debates: 'المناظرات المنتظمة',
            debatesText: 'جلسات مناظرة أسبوعية حول مواضيع سياسية واقتصادية واجتماعية راهنة.',
            competitions: 'المنافسات',
            competitionsText: 'المشاركة في بطولات المناظرة الوطنية والدولية بسجل استثنائي.',
            training: 'التدريب',
            trainingText: 'ورش عمل في تقنيات المناظرة والبلاغة وفن الخطابة لجميع المستويات.',
            events: 'الفعاليات',
            eventsText: 'تنظيم مؤتمرات وطاولات مستديرة وفعاليات ثقافية مفتوحة للمجتمع.',
            joinUs: 'انضم إلينا',
            whyJoin: 'لماذا تنضم إلينا؟',
            benefits: [
                'تطوير مهارات خطابية استثنائية',
                'المشاركة في منافسات وطنية ودولية',
                'تدريب مستمر في تقنيات المناظرة',
                'شبكة من المهنيين والخريجين',
                'فرص القيادة وتحمل المسؤولية',
                'شهادات واعتراف أكاديمي'
            ],
            howToJoin: 'كيف تنضم إلينا؟',
            joinText: 'التسجيلات مفتوحة لجميع طلاب EHTP. اتصل بنا لمزيد من المعلومات حول جلسات التجربة وبرامج التدريب.',
            contactUs: 'اتصل بنا'
        }
    };
    
    const t = translations[lang] || translations.fr;
    
    // Appliquer les traductions
    const title = document.querySelector('.definition-title');
    if (title) title.textContent = t.title;
    
    const subtitle = document.querySelector('.definition-subtitle');
    if (subtitle) subtitle.textContent = t.subtitle;
    
    // Traduire les cartes de définition
    const definitionCards = document.querySelectorAll('.definition-card');
    if (definitionCards.length >= 3) {
        // Mission
        const missionCard = definitionCards[0];
        missionCard.querySelector('h3').textContent = t.mission;
        missionCard.querySelector('p').textContent = t.missionText;
        
        // Vision
        const visionCard = definitionCards[1];
        visionCard.querySelector('h3').textContent = t.vision;
        visionCard.querySelector('p').textContent = t.visionText;
        
        // Valeurs
        const valuesCard = definitionCards[2];
        valuesCard.querySelector('h3').textContent = t.values;
        
        const valuesList = valuesCard.querySelector('.values-list');
        if (valuesList) {
            valuesList.innerHTML = `
                <li><strong>${t.excellence}</strong> ${t.excellenceText}</li>
                <li><strong>${t.respect}</strong> ${t.respectText}</li>
                <li><strong>${t.innovation}</strong> ${t.innovationText}</li>
                <li><strong>${t.solidarity}</strong> ${t.solidarityText}</li>
                <li><strong>${t.integrity}</strong> ${t.integrityText}</li>
            `;
        }
    }
    
    // Traduire les activités
    const activitiesTitle = document.querySelector('.activities-section h2');
    if (activitiesTitle) activitiesTitle.textContent = t.activities;
    
    const activityCards = document.querySelectorAll('.activity-card');
    if (activityCards.length >= 4) {
        activityCards[0].querySelector('h4').textContent = t.debates;
        activityCards[0].querySelector('p').textContent = t.debatesText;
        
        activityCards[1].querySelector('h4').textContent = t.competitions;
        activityCards[1].querySelector('p').textContent = t.competitionsText;
        
        activityCards[2].querySelector('h4').textContent = t.training;
        activityCards[2].querySelector('p').textContent = t.trainingText;
        
        activityCards[3].querySelector('h4').textContent = t.events;
        activityCards[3].querySelector('p').textContent = t.eventsText;
    }
    
    // Traduire la section statistiques
    const statsTitle = document.querySelector('.stats-section h2');
    if (statsTitle) statsTitle.textContent = t.stats;
    
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 3) {
        // Années d'excellence
        const yearsCard = statCards[0];
        yearsCard.querySelector('.stat-label').textContent = t.years;
        yearsCard.querySelector('.stat-description').textContent = t.yearsDesc;
        
        // Membres actifs
        const membersCard = statCards[1];
        membersCard.querySelector('.stat-label').textContent = t.members;
        membersCard.querySelector('.stat-description').textContent = t.membersDesc;
        
        // Trophées gagnés
        const trophiesCard = statCards[2];
        trophiesCard.querySelector('.stat-label').textContent = t.trophies;
        trophiesCard.querySelector('.stat-description').textContent = t.trophiesDesc;
    }
    
    // Traduire la section graphique
    const chartTitle = document.querySelector('.chart-section h2');
    if (chartTitle) chartTitle.textContent = t.chart;
    
    const chartDescription = document.querySelector('.chart-description p');
    if (chartDescription) chartDescription.textContent = t.chartDesc;
    
    // Traduire la section adhésion
    const membershipTitle = document.querySelector('.membership-section h2');
    if (membershipTitle) membershipTitle.textContent = t.joinUs;
    
    const membershipInfo = document.querySelector('.membership-info h3');
    if (membershipInfo) membershipInfo.textContent = t.whyJoin;
    
    const benefitsList = document.querySelector('.benefits-list');
    if (benefitsList) {
        benefitsList.innerHTML = t.benefits.map(benefit => 
            `<li><i class="fas fa-check"></i> ${benefit}</li>`
        ).join('');
    }
    
    const joinCard = document.querySelector('.join-card h3');
    if (joinCard) joinCard.textContent = t.howToJoin;
    
    const joinText = document.querySelector('.join-card p');
    if (joinText) joinText.textContent = t.joinText;
    
    const contactBtn = document.querySelector('.join-btn span');
    if (contactBtn) contactBtn.textContent = t.contactUs;
}

// Navigation depuis le footer
document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Simuler un clic sur l'élément de navigation correspondant
            const navItem = document.querySelector(`[data-section="${section}"]`);
            if (navItem) {
                navItem.click();
            }
        });
    });
    
    // Ajouter l'événement pour le bouton Explorer
    document.addEventListener('click', function(e) {
        if (e.target.closest('.explore-btn')) {
            loadDefinitionSection();
            
            // Scroll vers le haut de la page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Gérer le bouton "Nous Contacter" dans la section définition
        if (e.target.closest('.join-btn')) {
            e.preventDefault();
            
            // Mettre à jour la navigation active
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            const contactNavItem = document.querySelector('[data-section="contact"]');
            if (contactNavItem) {
                contactNavItem.classList.add('active');
            }
            
            // Charger la section contact
            renderContactSection(currentLang);
            
            // Scroll vers le haut de la page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
    
    // Ajouter l'animation de l'icône du bouton
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
            }
        }
    });
    
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(5px)';
            }
        }
    });
    
    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.join-btn')) {
            const icon = e.target.closest('.join-btn').querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        }
    });
});

// Initialisation avec la langue française par défaut
changeLanguage('fr');

// Mode sombre/clair
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = false;

// Vérifier si le thème sombre était déjà activé
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    isDarkMode = true;
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    
    // Sauvegarder la préférence
    localStorage.setItem('darkMode', isDarkMode);
    
    const icon = themeToggle.querySelector('i');
    if(isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Accessibilité : fermer menu avec Echap
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeMenu();
        langDropdownOpen = false;
        langDropdown.classList.remove('open');
    }
});

// Carrousel dynamique Accueil
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;
    let timer = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        current = idx;
    }
    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }
    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }
    function startAuto() {
        timer = setInterval(nextSlide, 4000);
    }
    function stopAuto() {
        clearInterval(timer);
    }
    nextBtn.addEventListener('click', () => { stopAuto(); nextSlide(); startAuto(); });
    prevBtn.addEventListener('click', () => { stopAuto(); prevSlide(); startAuto(); });
    // Pause on hover
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopAuto);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startAuto);
    showSlide(0);
    startAuto();
}
if(document.querySelector('.carousel-section')) {
    initCarousel();
}

// Fonction pour créer le graphique d'évolution des membres
function createMembersChart() {
    const ctx = document.getElementById('membersChart');
    if (!ctx) return;
    
    // Couleurs dynamiques pour le graphique
    const colors = {
        primary: '#e2b889',
        secondary: '#DAA520',
        accent: '#FFD700',
        highlight: '#FFA500',
        gradient: ['#e2b889', '#DAA520', '#FFD700', '#FFA500', '#FF8C00', '#FF6347']
    };
    
    const data = {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Nouveaux Membres',
            data: [43, 67, 81, 120, 140, 140],
            backgroundColor: function(context) {
                const index = context.dataIndex;
                const barColors = [
                    '#e2b889',  // Marron doré
                    '#DAA520',  // Or classique
                    '#FFD700',  // Or brillant
                    '#FFA500',  // Orange doré
                    '#FF8C00',  // Orange foncé
                    '#FF6347'   // Rouge-orange
                ];
                return barColors[index % barColors.length];
            },
            borderColor: '#ffffff',
            borderWidth: 3,
            borderRadius: 8,
            borderSkipped: false,
            // Animation des barres
            barThickness: 60,
            maxBarThickness: 80,
            minBarLength: 20
        }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        },
                        padding: 30,
                        usePointStyle: true,
                        pointStyle: 'rect'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: colors.accent,
                    bodyColor: '#ffffff',
                    borderColor: colors.primary,
                    borderWidth: 3,
                    cornerRadius: 15,
                    displayColors: true,
                    titleFont: {
                        size: 18,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 16
                    },
                    padding: 15,
                    callbacks: {
                        label: function(context) {
                            return `Membres: ${context.parsed.y}`;
                        },
                        title: function(context) {
                            return `Année ${context[0].label}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Année',
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(226, 184, 137, 0.3)',
                        borderColor: colors.primary,
                        borderWidth: 2,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        color: colors.primary,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Nombre de Membres',
                        color: colors.primary,
                        font: {
                            size: 20,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(226, 184, 137, 0.3)',
                        borderColor: colors.primary,
                        borderWidth: 2,
                        drawBorder: true,
                        drawOnChartArea: true,
                        drawTicks: true
                    },
                    ticks: {
                        color: colors.primary,
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        callback: function(value) {
                            return value + ' membres';
                        },
                        padding: 15
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                onProgress: function(animation) {
                    const chart = animation.chart;
                    const ctx = chart.ctx;
                    const meta = chart.getDatasetMeta(0);
                    
                    // Animation des barres avec effet de vague
                    if (meta.data.length > 0) {
                        ctx.save();
                        
                        meta.data.forEach((bar, index) => {
                            const progress = animation.currentStep / animation.numSteps;
                            const barProgress = Math.min(1, progress * 2 - index * 0.2);
                            
                            if (barProgress > 0) {
                                // Effet de particules au sommet des barres
                                const barColors = [
                                    '#e2b889', '#DAA520', '#FFD700', '#FFA500', '#FF8C00', '#FF6347'
                                ];
                                const barColor = barColors[index % barColors.length];
                                
                                // Particules animées au sommet
                                for (let i = 0; i < 8; i++) {
                                    const time = Date.now() * 0.001 + index * 0.5;
                                    const angle = (i / 8) * 2 * Math.PI + time;
                                    const radius = 15 + Math.sin(time * 2 + i) * 5;
                                    const x = bar.x + Math.cos(angle) * radius;
                                    const y = bar.y + Math.sin(angle) * radius;
                                    
                                    ctx.globalAlpha = barProgress * 0.6;
                                    ctx.fillStyle = barColor;
                                    
                                    ctx.beginPath();
                                    ctx.arc(x, y, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                                
                                // Effet de brillance sur les barres
                                const gradient = ctx.createLinearGradient(bar.x - bar.width/2, bar.y, bar.x + bar.width/2, bar.y);
                                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
                                gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
                                
                                ctx.fillStyle = gradient;
                                ctx.fillRect(bar.x - bar.width/2, bar.y, bar.width, bar.height);
                            }
                        });
                        
                        ctx.restore();
                    }
                },
                onComplete: function(animation) {
                    // Animation continue des barres
                    const chart = animation.chart;
                    const meta = chart.getDatasetMeta(0);
                    
                    function animateBars() {
                        meta.data.forEach((bar, index) => {
                            const time = Date.now() * 0.001 + index * 0.3;
                            
                            // Animation de hauteur des barres
                            const heightVariation = Math.sin(time) * 0.05;
                            bar._model.base = bar._model.base;
                            bar._model.y = bar._model.y + Math.sin(time) * 2;
                            
                            // Animation de largeur
                            const widthVariation = Math.sin(time * 0.5) * 0.1;
                            bar._model.width = bar._model.width * (1 + widthVariation);
                            
                            // Effet de brillance
                            bar._model.borderWidth = 3 + Math.sin(time) * 1;
                        });
                        chart.update('none');
                        requestAnimationFrame(animateBars);
                    }
                    
                    setTimeout(animateBars, 1000);
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            elements: {
                bar: {
                    hoverRadius: 15,
                    hoverBorderWidth: 5
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Fonction pour convertir hex en RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
