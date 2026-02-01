const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if(menuBtn){
  menuBtn.onclick = () => menu.classList.toggle('open');
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

document.querySelectorAll('.open-modal').forEach(btn=>{
  btn.onclick = e => {
    e.preventDefault();
    const card = btn.closest('.post-card');
    modalTitle.textContent = card.dataset.title;
    modalBody.textContent = card.dataset.content;
    modal.style.display = 'block';
  };
});

document.querySelector('.close').onclick = ()=> modal.style.display='none';
window.onclick = e => { if(e.target===modal) modal.style.display='none'; };
