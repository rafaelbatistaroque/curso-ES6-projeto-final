import verificarCliqueLadoFora from "./clique-lado-fora.js";

export default class DropDownMenu {
    constructor(dropDownMenu) {
        this.dropdownMenus = document.querySelectorAll(dropDownMenu);
        this.tiposInteracao = ['click', 'touchstart'];
        this.ativarDropDownMenu = this.ativarDropDownMenu.bind(this);
        this.classeAtiva = 'ativo';
    }

    ativarDropDownMenu(event) {
        event.preventDefault();
        const elementoAtual = event.currentTarget;
        elementoAtual.classList.add(this.classeAtiva);
        verificarCliqueLadoFora(elementoAtual, this.tiposInteracao, () => {
            elementoAtual.classList.remove(this.classeAtiva);
        });
    }
    adicionarEventoDropDown() {
        this.dropdownMenus.forEach(itemMenu => {
            this.tiposInteracao.forEach(interacao => {
                itemMenu.addEventListener(interacao, this.ativarDropDownMenu);
            });
        });
    }
    iniciar() {
        if (this.dropdownMenus.length) {
            this.adicionarEventoDropDown();
        }
        return this;
    }
}

