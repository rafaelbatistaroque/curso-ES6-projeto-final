export default class AcordeonAnimacao {
    constructor(listaItens) {
        this.listaPerguntasFAQ = document.querySelectorAll(listaItens);
        this.classeAtiva = 'ativo';
    }

    toggleAcordeon(pergunta) {
        pergunta.classList.toggle(this.classeAtiva);
        pergunta.nextElementSibling.classList.toggle(this.classeAtiva);
    }

    adicionarEventoAcordeon() {
        this.listaPerguntasFAQ.forEach(pergunta =>
            pergunta.addEventListener('click', () =>
                this.toggleAcordeon(pergunta)));
    }

    iniciar() {
        if (this.listaPerguntasFAQ.length) {
            this.toggleAcordeon(this.listaPerguntasFAQ[0]);//Abrir primeiro item da lista.
            this.adicionarEventoAcordeon();
        }
        return this;
    }
}