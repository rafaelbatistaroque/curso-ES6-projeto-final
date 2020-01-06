import verificarCliqueLadoFora from "./clique-lado-fora.js";

export default function mostrarMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="button"]');
    const dropDown = document.querySelector('[data-menu="lista-menu"]');
    const tiposInteracao = ['click', 'touchstart'];

    function abrirMenu() {
        btnMenu.classList.add('ativo');
        dropDown.classList.add('ativo');
        verificarCliqueLadoFora(dropDown, tiposInteracao, () => {
            btnMenu.classList.remove('ativo');
            dropDown.classList.remove('ativo');
        });
    }

    if (btnMenu) {
        tiposInteracao.forEach(interacao => {
            btnMenu.addEventListener(interacao, abrirMenu);
        });
    }
}