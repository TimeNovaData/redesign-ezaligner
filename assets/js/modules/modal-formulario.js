export default function modalFormulario() {
    const modalcontainer = document.querySelector('.modal__container');
    const botaoAbrir = document.querySelectorAll(".agenda__wrapper-eventos-item .btn__vermais");
    const btnInscreva = document.querySelectorAll('.btn__inscricao');
    const btnEviar = document.querySelectorAll('.modal__inscricao .btn__enviar');
    const btnVoltar = document.querySelectorAll('.modal__inscricao .voltar');

    function abrirModal(evento) {
        evento.preventDefault();
        modalcontainer.classList.add('sobeModal');
        fecharModal();
        passos();
    }

    function fecharModal() {
        if (modalcontainer.classList.contains('sobeModal')) {
            const botaoFechar = document.querySelectorAll('.fechar');
            botaoFechar.forEach((btn) => {
                btn.addEventListener('click', () => {
                    modalcontainer.classList.remove("sobeModal");
                    modalcontainer.classList.remove("step2");
                    modalcontainer.classList.remove("step3");
                })
            })
        }
    }


    botaoAbrir.forEach((btn) => {
        btn.addEventListener('click', abrirModal);
    })


    /* PASSO A PASSO*/
    function passos() {
        function passoFormulario() {
            modalcontainer.classList.add('step2');
        }
        function passoConfirmacao() {
            modalcontainer.classList.remove("step2");
            modalcontainer.classList.add('step3');
        }

        function voltar(){
            modalcontainer.classList.remove("step2");
        }

        btnVoltar.forEach((botao)=>{
            botao.addEventListener('click', voltar)
        })

        btnInscreva.forEach((botao) => {
            botao.addEventListener("click", passoFormulario);
        })

        btnEviar.forEach((botao) => {
            botao.addEventListener('click', passoConfirmacao);
        })
    }

}