export default function comparador() {
    
    const foto = document.querySelectorAll(".img2"),
        slider = document.querySelectorAll(".range input");
    const proximo = document.querySelectorAll('.next');
    const anterior = document.querySelectorAll('.prev');


    function moveDivisor(index) {
        let valorSlide = +slider[index].value;
        console.log(valorSlide)
        foto[index].style.width = valorSlide + "%";
    }


    slider.forEach((slide, index) => {
        slide.addEventListener("input", function (e) {
            moveDivisor(index);
        });
    })



    anterior.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            let situacao = +slider[index].value;
            if (situacao > 0 && situacao <= 100) {
                situacao -= 5;
                console.log(situacao)
                slider[index].setAttribute('value', (`${situacao}`));
                slider[index].value = situacao;
                foto[index].style.width = situacao + "%";
            }
        })
    })


    
    proximo.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            let situacao = +slider[index].value;
            if (situacao < 100 && situacao >= 0) {
                situacao += 5;
                console.log(situacao)
                slider[index].setAttribute('value', (`${situacao}`));
                slider[index].value = situacao;
                foto[index].style.width = situacao + "%";
            }
        })
    })
}