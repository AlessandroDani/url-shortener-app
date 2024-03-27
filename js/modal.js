const openModal = document.getElementById('btn-open-modal');
const copyLink = document.getElementById('btn-copy-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('btn-close-modal');

/**
 * This variable will have the short url
 */
let url;

/**
 * This event is when user click the buttom 'Get short url'
 */
openModal.addEventListener("click" , ()=>{
    postUrl().then(
        resultado =>{
            if(resultado == null){
                return;
            }
            /**
             * Here the url is created with protocol, location host and id
             */
            url =  window.location.protocol + '//' + window.location.host+ '/' + resultado.id;

            /**
             * Put url information in modal
             */
            const modalLink = modal.querySelector('#modal__link');
            modalLink.href = url;
            modalLink.textContent = url;

            /**
             * Change display: none to display: flex. For show modal
             */
            modal.style.display = "flex";
            modal.showModal();
        }
    );
    
});

/**
 * Event when click on bottom 'Copy link'
 */
copyLink.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(url);

    /**
     * Add Class'copied' change description , background color and icon of the buttom
     */
    copyLink.classList.add('copied');
    copyLink.innerHTML = `
        Link copied
        <a>
            <img id="btn-copy-modal-img" src="img/check.svg"> 
         </a> 
    `;
});

/**
 * Event when click on bottom 'x'
 */
closeModal.addEventListener('click', () =>{
    /**
     * Delete class copied and change description, background color and icon
     */
    copyLink.classList.remove('copied');
    copyLink.innerHTML = `
        Copy link
        <a>
            <img id="btn-copy-modal-img" src="img/copy.svg"> 
         </a> 
    `;
    modal.close();

    /**
     * Change display = none for hidden modal
     */
    modal.style.display = "none";
})