export default function ativarScrollSuaveMenu() {//🔽
    const linksInternos = document.querySelectorAll('[data-tab="nav"] a[href^="#"]');

    function deslizarParaSecao(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });
    }

    linksInternos.forEach(link => link.addEventListener('click', deslizarParaSecao));

}