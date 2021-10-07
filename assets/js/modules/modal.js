export default function initiModal(){
    const containerModal = document.querySelector('[data-modal="container"]');
    const abrirModal = document.querySelectorAll('[data-modal="abrir"]');
    const fecharModal = document.querySelectorAll('[data-modal="fechar"]');


    function modalOn(evento){
        evento.preventDefault();
        containerModal.classList.add("modalOn");
    }

    function modalOff(evento){
        evento.preventDefault();
        containerModal.classList.add("modalOff");
    }

    

    abrirModal.forEach((botao)=>{
        botao.addEventListener("click", modalOn);
    })


    

}