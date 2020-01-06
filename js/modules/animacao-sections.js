export default function ativarAnimacaoSections() { //🔽
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const proporcaoTela60porCento = window.innerHeight * .6;
    function animarScrollSection() {
        sections.forEach(section => {
            const sectionTopo = section.getBoundingClientRect().top;
            const isTelaMetade = (sectionTopo - proporcaoTela60porCento) < 0;

            if (isTelaMetade)
                section.classList.add('ativo');
            else if (section.classList.contains('ativo'))
                section.classList.remove('ativo');
        });
    }
    if (sections.length) {
        window.addEventListener('scroll', animarScrollSection);
    }
}