export default class ModalLogin {

    constructor(btnAbrir, btnFechar, janela) {
        this.btnAbrir = document.querySelector(btnAbrir);
        this.btnFechar = document.querySelector(btnFechar);
        this.containerPretoExterno = document.querySelector(janela);

        //bind do this para referênciar o objeto da classe
        this.toggleModal = this.toggleModal.bind(this);
        this.fecharModalNoCliqueExterno = this.fecharModalNoCliqueExterno.bind(this);
    }
    toggleModal(event) {
        event.preventDefault();
        this.containerPretoExterno.classList.toggle('ativo');
    }
    fecharModalNoCliqueExterno(event) {
        if (event.target === this.containerPretoExterno)
            this.toggleModal(event);
    }
    adicionarEventoCliqueBotoesModal() {
        this.btnAbrir.addEventListener('click', this.toggleModal);
        this.btnFechar.addEventListener('click', this.toggleModal);
        this.containerPretoExterno.addEventListener('click', this.fecharModalNoCliqueExterno);
    }
    iniciar() {
        if (this.btnAbrir && this.btnFechar && this.containerPretoExterno)
            this.adicionarEventoCliqueBotoesModal();
        return this;
    }
}