/* ================= MOBILE MENU ================= */
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

if(toggle){
  toggle.addEventListener('click',()=>{
    nav.classList.toggle('active');
  });
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('active');
    }
  });
});

/* ================= SCROLL ANIMATION ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.2});

document.querySelectorAll(
  '.service-box, .why-box, .process-box, .area-grid span, .lead-form, .hero-content'
).forEach(el => observer.observe(el));

/* ================= FAQ ACCORDION ================= */
document.querySelectorAll('.faq-question').forEach(q=>{
  q.addEventListener('click',()=>{
    q.parentElement.classList.toggle('active');
  });
});

/* ================= TESTIMONIAL SLIDER ================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  if(slides[i]) slides[i].classList.add('active');
}

if(slides.length > 0){
  showSlide(0);
  setInterval(()=>{
    currentSlide = (currentSlide+1) % slides.length;
    showSlide(currentSlide);
  },4000);
}

/* ================= WHATSAPP AUTO MESSAGE ================= */
const whatsappForms = document.querySelectorAll('.lead-form');

whatsappForms.forEach(form=>{
  form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const phone = form.querySelector('input[placeholder="Phone Number"]').value;
    const location = form.querySelector('input[placeholder="Location"]').value;
    const problem = form.querySelector('textarea').value;

    const msg = `New Pest Control Enquiry%0A
Name: ${name}%0A
Phone: ${phone}%0A
Location: ${location}%0A
Problem: ${problem}`;

    const whatsappNumber = "919354551025"; // change if needed
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`,'_blank');

    form.reset();
  });
});

/* ================= STICKY CTA BEHAVIOR ================= */
const mobileCTA = document.querySelector('.mobile-cta');

if(mobileCTA){
  let lastScroll = 0;
  window.addEventListener('scroll',()=>{
    const current = window.pageYOffset;
    if(current > lastScroll){
      mobileCTA.style.transform = 'translateY(100%)';
    }else{
      mobileCTA.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
}
