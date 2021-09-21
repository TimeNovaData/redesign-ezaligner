export default function menuDropdown(){
    const telaMobile = window.matchMedia('(max-width: 1024px)')
    const menuDropdown = document.querySelectorAll('[data-dropdown]');
    menuDropdown.forEach((menu)=>[
        ['click', 'touchstart'].forEach((eventoUsuario)=>{
            menu.addEventListener(eventoUsuario, handleClick);
        })
    ])

    function handleClick(evento){
        this.classList.add('ativo');
      cliqueFora(this, ()=>{
          this.classList.remove('ativo');
      })
    }

    function cliqueFora(element, callback){
        const html = document.documentElement;
        html.addEventListener('click', handleOutsideClick);
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
                html.removeEventListener("click", handleOutsideClick);
                callback();
            }
        }
    }


        if (telaMobile) {
            const dropdownBtn = document.querySelectorAll('.menu__dropdown-mobile span');
            const dropdown = document.querySelectorAll('.menu__dropdown-mobile');
            dropdownBtn.forEach((item, index)=>{
                item.addEventListener('click', (e) => dropdown[index].classList.toggle('ativo'));
            })
        }

}   