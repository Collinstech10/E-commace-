// Simple interactivity for Sellectionz site: mobile menu and small animations
(function(){
  // Mobile menu toggle
  const hamb = document.querySelectorAll('.hamburger');
  let mobileMenu;
  function createMobileMenu(){
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = '<a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">Services</a><a href="gallery.html">Gallery</a><a href="contact.html">Contact</a>';
    document.body.appendChild(mobileMenu);
  }
  if(!mobileMenu) createMobileMenu();
  hamb.forEach(h=>h.addEventListener('click', ()=> mobileMenu.classList.toggle('show') ));

  // small hero animation (fade-in)
  document.addEventListener('DOMContentLoaded', ()=>{
    const hero = document.querySelector('.hero-content');
    if(hero){ hero.style.opacity = 0; hero.style.transform = 'translateY(8px)'; setTimeout(()=>{ hero.style.transition='opacity .8s ease, transform .8s ease'; hero.style.opacity=1; hero.style.transform='translateY(0)'; }, 120); }
  });
})();