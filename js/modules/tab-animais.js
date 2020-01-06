export default function mostrarDescricaoAnimais() { //🔽
    const imgAnimais = document.querySelectorAll('[data-tab="menu"] li');
    const boxConteudo = document.querySelectorAll('[data-tab="content"] section');
    const classeAtiva = 'ativo';

    function ativarConteudo(index) {
        boxConteudo.forEach(item => item.classList.remove(classeAtiva));
        const direcao = boxConteudo[index].dataset.anime;

        boxConteudo[index].classList.add(classeAtiva, direcao);
    }
    if (imgAnimais.length && boxConteudo.length) {
        boxConteudo[0].classList.add(classeAtiva);

        imgAnimais.forEach((imgAnimal, index) => imgAnimal.addEventListener('click', () => ativarConteudo(index)));
    }
}