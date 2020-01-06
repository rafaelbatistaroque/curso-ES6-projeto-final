export default class TabDescricaoAnimais {
    constructor(itemMenu, boxConteudo) {
        this.imgAnimais = document.querySelectorAll(itemMenu);
        this.boxConteudo = document.querySelectorAll(boxConteudo);
        this.classeAtiva = 'ativo';
    }
    ativarConteudoDeAcordoComImagem(index) {
        this.boxConteudo.forEach(item => item.classList.remove(this.classeAtiva));
        const direcao = this.boxConteudo[index].dataset.anime;

        this.boxConteudo[index].classList.add(this.classeAtiva, direcao);
    }
    iniciar() {
        if (this.imgAnimais.length && this.boxConteudo.length) {
            this.ativarConteudoDeAcordoComImagem(0);
            this.adicionarEventoDescricaoAnimais();
        }
    }
    adicionarEventoDescricaoAnimais() {
        this.imgAnimais.forEach((imgAnimal, index) =>
            imgAnimal.addEventListener('click', () =>
                this.ativarConteudoDeAcordoComImagem(index)));
    }
}