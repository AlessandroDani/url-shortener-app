const openModal = document.getElementById('btn-open-modal');
const copyLink = document.getElementById('btn-copy-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('btn-close-modal');
let url;

openModal.addEventListener("click" , ()=>{
    postUrl().then(
        resultado =>{
            url = resultado;
            //console.log(url);
            const modalLink = modal.querySelector('#modal__link');
            modalLink.href = url;
            modalLink.textContent = url;
            modal.style.display = "flex";
            modal.showModal();
        }
    );
    
});

copyLink.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(url);
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