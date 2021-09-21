export default function menus() {
    const telaMobile = window.matchMedia('(max-width: 1024px)').matches;

    //menu
    function abrirMenu() {
        if (telaMobile) {
            const iconeMenu = document.querySelector('.menu__mobile-hamburger');
            const menu = document.querySelector('.menu__mobile');
            iconeMenu.addEventListener('click', menuMobile);
            function menuMobile() {
                menu.classList.toggle('ativa');
            }
            

        }
    }
    abrirMenu();

    function fecharMenu() {
        const fundoPreto = document.querySelector('.fundo');
        const menu = document.querySelector('.menu__mobile');
        const dropdowns = document.querySelectorAll('.menu__dropdown-mobile');
        fundoPreto.addEventListener('click', fecha);

        function fecha(event) {
            if (menu.classList.contains('ativa') && event.target === fundoPreto) {
                menu.classList.remove('ativa');
               dropdowns.forEach((dropdown)=>{ dropdown.classList.remove('ativo')});

            }
        }
    }

    fecharMenu();


    function scrollMenu() {
        const menu = document.querySelector('.menu__desktop');
        const menuMobile = document.querySelector('.menu__mobile');

        window.addEventListener('scroll', animaMenu);

        function animaMenu() {
            const windowTop = window.pageYOffset;
            if ((windowTop) > menu.offsetTop) {
                menu.classList.add("scroll");
            } else {
                menu.classList.remove("scroll");
            }

            //mobile
            if ((windowTop > menuMobile.offsetTop)) {
                menuMobile.classList.add('scroll');
            } else {
                menuMobile.classList.remove('scroll');
            }
        }
    }
    scrollMenu();


}