import verificarCliqueLadoFora from "./clique-lado-fora.js";

export default class MenuMobile {
    constructor(btnMenu, listaDopDown) {
        this.btnMenu = document.querySelector(btnMenu);
        this.dropDown = document.querySelector(listaDopDown);
        this.tiposInteracao = ['click', 'touchstart'];
        this.classeAtivo = 'ativo';
        this.abrirMenu = this.abrirMenu.bind(this);
    }

    abrirMenu() {
        this.btnMenu.classList.add(this.classeAtivo);
        this.dropDown.classList.add(this.classeAtivo);
        verificarCliqueLadoFora(this.dropDown, this.tiposInteracao, () => {
            this.btnMenu.classList.remove(this.classeAtivo);
            this.dropDown.classList.remove(this.classeAtivo);
        });
    }

    adicionarEventoMenuMobile() {
        this.tiposInteracao.forEach(interacao =>
            this.btnMenu.addEventListener(interacao, this.abrirMenu));
    }
    iniciar() {
        if (this.btnMenu && this.dropDown)
            this.adicionarEventoMenuMobile();
        return this;
    }
}