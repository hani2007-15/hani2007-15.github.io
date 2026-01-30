// منوی موبایل
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{menu.classList.toggle('open')});

// Scroll Smooth و Scroll Spy
const sections=document.querySelectorAll('section');
const menuLinks=document.querySelectorAll('.menu a');
window.addEventListener('scroll',()=>{
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-70;
    if(pageYOffset>=sectionTop){current=section.getAttribute('id')}
  });
  menuLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href')=="#"+current){link.classList.add('active')}
  });
});

// Fade-in هنگام اسکرول
const faders=document.querySelectorAll('.section,.post-card');
const appearOptions={threshold:0.1,rootMargin:"0px 0px -50px 0px"};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting){return}
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>{appearOnScroll.observe(fader)});

// Modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const card = btn.closest('.post-card');
    modalTitle.textContent = card.dataset.title;
    modalBody.textContent = card.dataset.content;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', e => { if(e.target === modal){ modal.style.display = 'none'; }});