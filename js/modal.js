const openModal = document.getElementById('btn-open-modal');
const copyLink = document.getElementById('btn-copy-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('btn-close-modal');

openModal.addEventListener("click" , ()=>{
    modal.style.display = "flex";
    modal.showModal();
});

copyLink.addEventListener("click" , ()=>{
    let link = modal.querySelector('#modal__link').innerText;
    navigator.clipboard.writeText(link);
    copyLink.classList.add('copied');
    copyLink.innerHTML = `
        Link copied
        <a>
            <img id="btn-copy-modal-img" src="img/check.svg"> 
         </a> 
    `;
});

closeModal.addEventListener('click', () =>{
    copyLink.classList.remove('copied');
    copyLink.innerHTML = `
        Copy link
        <a>
            <img id="btn-copy-modal-img" src="img/copy.svg"> 
         </a> 
    `;
    modal.close();
    modal.style.display = "none";
})