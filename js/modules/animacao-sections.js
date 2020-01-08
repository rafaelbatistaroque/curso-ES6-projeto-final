import debounce from '../settings/debounce.js';

export default class AnimacaoSection {
    constructor(secoes) {
        this.sections = document.querySelectorAll(secoes);
        this.proporcaoTela60porCento = window.innerHeight * .6;
        this.verificarDistancia = debounce(this.verificarDistancia.bind(this), 90);
    }
    obterDistanciaTopVerticalScroll() {
        this.distanciasTop = [...this.sections].map(secao => {
            const topoSecao = secao.offsetTop;
            return {
                elemento: secao,
                topoSecao: Math.floor(topoSecao - this.proporcaoTela60porCento)
            };
        });
    }
    verificarDistancia() {
        console.log('teste');
        this.distanciasTop.forEach(cadaDistancia => {
            if (window.pageYOffset > cadaDistancia.topoSecao)
                cadaDistancia.elemento.classList.add('ativo');
            else if (cadaDistancia.elemento.classList.contains('ativo'))
                cadaDistancia.elemento.classList.remove('ativo');
        });
    }
    iniciar() {
        if (this.sections.length) {
            this.obterDistanciaTopVerticalScroll();
            this.verificarDistancia();
            window.addEventListener('scroll', this.verificarDistancia);
        }
        return this;
    }
}