/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // ===== MENU SHOW =====
    // 
    
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // 
    // Validate if constant exists

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
function sendMail(){
  var parents = {
    name: documunet.getElementById("contact-name").value ,
    email: document.getElementById("contact-email").value ,
    project: document.getElementById("contact-project").value ,
  };
  const serviceID = "service_5la9cfp";
const templateID = "template_8eat9fg";

emialjs.send(serviceID,templateID,parents)
.then(
  res =>{
    document.getElementById("contact-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-project").value = "";
    console.log(res);
    alert("Your Message has been successfully sent");
  }).catch(err=>console.log(err));
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
  }else{
    sectionsClass.classList.remove('active-link')
  }
  })
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current thme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if (selectedTheme) {
  //if the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '69px',
  duration: 2000,
  delay: 200,
  // reset: true /*Animations repeat*/
})

sr.reveal('.head__socials, .projects__container, .testimonial__container, .footer__container')
sr.reveal('.home__info div', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.head__info, .about__me-image, .skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal('.profile__area, .about__me-info, .skills__content:nth-child(2), .contact__content:nth-child(2)', {origin: 'right'})
sr.reveal('.skills__content:nth-child(3)', {origin: 'left'})
sr.reveal('.qualification__content, .services__card', {interval: 100})


// read more

const readMoreBtn = document.querySelector('.read__more');
const readMoreContent = document.querySelector('.read__more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent = "Show Less..."
  }else{
    readMoreBtn.textContent = "Show More..."
  }
})