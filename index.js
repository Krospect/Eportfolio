//template_pgx4pqd
//service_b253ivo
//3Rxi4lP9vG0P8ZMOz


function contact(event){
    event.preventDefault();
    const loading= document.querySelector('.modal__overlay--loading');
    const success= document.querySelector('.modal__overlay--success');
    loading.classList+=" modal__overlay--visible";
    emailjs
        .sendForm(
            'service_b253ivo',
            'template_pgx4pqd',
            event.target,
            '3Rxi4lP9vG0P8ZMOz'
        ).then(()=>{

            loading.classList.remove('modal__overlay--visible');
            success.classList+= " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at wahab14dar@gmail.com."
            );

        })
}
let isModalOpen=false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen=false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen=true;
    //toggle modal
    document.body.classList += " modal--open"
}