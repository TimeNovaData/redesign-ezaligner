export default function modalTermos() {

    const btnAbrir = document.querySelectorAll('#modal__termos');
    const containerModal = document.querySelector('.modal__container');
    const fecharTermos = document.querySelectorAll("#fecharTermos");



    function abrirModal(evento) {
        evento.preventDefault();
        containerModal.classList.add('sobeModal');
    }

    function fecharModal(evento) {
        evento.preventDefault();
        containerModal.classList.remove('sobeModal');
    }
    

    btnAbrir.forEach((btn) => {
        btn.addEventListener('click', abrirModal);
    })

    fecharTermos.forEach((btn)=>{
        btn.addEventListener('click', fecharModal);
    })

    containerModal.addEventListener('click', (evento)=>{
        evento.target.classList.remove('sobeModal');
    });

    
}