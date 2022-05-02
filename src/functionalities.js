/* MODALS of code-settings */

function openModal(modalId){ //used in the code-settings' modal

    var modal = document.getElementById(modalId);

    modal.showModal();
}

function closeModal(modalId){
    var modal = document.getElementById(modalId);

    if(modal.open) modal.close();
}

document.addEventListener("click", (e)=>{

    document.querySelectorAll(".modal").forEach((modal)=>{

        //if target is the *modal, close it
        if(e.target == modal && modal.open)
        modal.close();
    })
})
