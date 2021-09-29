export default function initAccordion() {
    const accordionPergunta = document.querySelectorAll('.duvidas__accordion-item');

    const ativar = 'ativar';

    if (accordionPergunta.length) {

        function activeAccordion(event) {
            this.querySelector('.resposta').classList.toggle(ativar);
            const trocarIcone = this.querySelector('.pergunta').dataset.content;
            this.querySelector('.pergunta').dataset.content = trocarIcone == "+" ? "-" : "+";
        }

        
        accordionPergunta.forEach((item, index) => {
            item.addEventListener('click', activeAccordion);
        })

     

      
    }

}