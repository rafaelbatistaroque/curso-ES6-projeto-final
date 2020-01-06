import { animaisApi } from "../settings/api.js";

export default function tratarDadosAnimais() {
    try {
        carregarDadosAnimais(animaisApi);
    } catch (erro) {
        console.log(erro);
    }
    async function carregarDadosAnimais(urlAnimais) {
        const animais = await (await fetch(urlAnimais)).json();
        const gradeAnimais = document.querySelector('.numeros-grid');

        animais.forEach(animal => {
            const containerAnimal = criarGradeAnimal(animal);
            gradeAnimais.appendChild(containerAnimal);
        });
        tratarAnimacaoNumeros();
    }
    function criarGradeAnimal(animal) {
        const container = document.createElement('div');

        container.classList.add('numero-animal');
        container.innerHTML = `<h3>${animal.especie}</h3>`;
        container.innerHTML += `<span data-numero>${animal.quantidade}</span>`;

        return container;
    }
    function tratarAnimacaoNumeros() {
        function animacaoNumeros() {
            const numeros = document.querySelectorAll('[data-numero]');
            numeros.forEach((numero) => {
                const total = +numero.textContent;
                const incremento = Math.floor(total * .01);
                let start = 0;
                const time = setInterval(() => {
                    start += incremento;
                    numero.textContent = start;
                    if (start >= total) {
                        numero.textContent = total;
                        clearInterval(time);
                    }
                }, 25 * Math.random());
            });
        }
        function tratarMudancaNumeros(mutacao) {
            if (mutacao[0].target.classList.contains('ativo')) {
                observarNumeros.disconnect();
                animacaoNumeros();
            }
        }
        const sectionNumeros = document.querySelector('.numeros');
        const observarNumeros = new MutationObserver(tratarMudancaNumeros);
        observarNumeros.observe(sectionNumeros, { attributes: true });
    }
}
