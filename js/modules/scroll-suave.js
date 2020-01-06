export default class ScrollSuaveMenu {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);
        if (options === undefined)
            this.options = { behavior: 'smooth', block: 'start' };
        else
            this.options = options;
        this.deslizarParaSecao = this.deslizarParaSecao.bind(this);
    }

    deslizarParaSecao(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView(this.options);

        // Alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });
    }
    adicionarEventoLink() {
        this.linksInternos.forEach(link =>
            link.addEventListener('click', this.deslizarParaSecao));
    }
    iniciar() {
        if (this.linksInternos.length)
            this.adicionarEventoLink();

        return this;
    }
}