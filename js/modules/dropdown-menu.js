import verificarCliqueLadoFora from "./clique-lado-fora.js";

export default function mostrarDropDownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    const tiposInteracao = ['click', 'touchstart'];

    dropdownMenus.forEach(itemMenu => {
        tiposInteracao.forEach(interacao => {
            itemMenu.addEventListener(interacao, tratarCliqueMenu);
        });
    });
    function tratarCliqueMenu(event) {
        event.preventDefault();
        this.classList.add('ativo');
        verificarCliqueLadoFora(this, tiposInteracao, () => {
            this.classList.remove('ativo');
        });
    }
}

