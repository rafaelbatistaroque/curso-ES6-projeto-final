export default class AnimacaoSection {
    constructor(secoes) {
        this.sections = document.querySelectorAll(secoes);
        this.proporcaoTela60porCento = window.innerHeight * .6;
        this.animarScrollSection = this.animarScrollSection.bind(this);
    }
    animarScrollSection() {
        this.sections.forEach(section => {
            const sectionTopo = section.getBoundingClientRect().top;
            const isTelaMetade = (sectionTopo - this.proporcaoTela60porCento) < 0;

            if (isTelaMetade)
                section.classList.add('ativo');
            else if (section.classList.contains('ativo'))
                section.classList.remove('ativo');
        });
    }
    iniciar() {
        if (this.sections.length) {
            this.animarScrollSection();
            window.addEventListener('scroll', this.animarScrollSection);
        }
        return this;
    }
}