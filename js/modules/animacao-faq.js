export default function mostrarRespostasFAQ() { //🔽
    const listaPerguntasFAQ = document.querySelectorAll('[data-tab="acordeon"] dt');
    const classeAtiva = 'ativo';

    function ativarAcordeon() {
        this.classList.toggle(classeAtiva);
        this.nextElementSibling.classList.toggle(classeAtiva);
    }
    if (listaPerguntasFAQ.length) {
        listaPerguntasFAQ[0].classList.add(classeAtiva);
        listaPerguntasFAQ[0].nextElementSibling.classList.add(classeAtiva);

        listaPerguntasFAQ.forEach(pergunta => pergunta.addEventListener('click', ativarAcordeon));
    }
}