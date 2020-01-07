import { animaisApi } from "../settings/api.js";

export default function tratarDadosAnimais() {
    try {
        carregarDadosAnimais();
    } catch (erro) {
        console.log(erro);
    }
    async function carregarDadosAnimais() {
        const animais = await (await fetch(animaisApi)).json();
        const gradeAnimais = document.querySelector('.numeros-grid');

        animais.forEach(animal => {
            const containerAnimal = criarGradeAnimal(animal);
            gradeAnimais.appendChild(containerAnimal);
        });
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.iniciar();
    }
    function criarGradeAnimal(animal) {
        const container = document.createElement('div');

        container.classList.add('numero-animal');
        container.innerHTML = `<h3>${animal.especie}</h3>`;
        container.innerHTML += `<span data-numero>${animal.quantidade}</span>`;

        return container;
    }
}
class AnimaNumeros {
    constructor(dadosNumeros, numerosClass, observerClass) {
        this.numeros = document.querySelectorAll(dadosNumeros);
        this.numerosClass = document.querySelector(numerosClass);
        this.observerClass = observerClass;
        this.tratarMudancaNumeros = this.tratarMudancaNumeros.bind(this);
    }
    static incrementarNumero(numero) {
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
    }
    animacaoNumeros() {
        this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
    }
    tratarMudancaNumeros(mutacao) {
        if (mutacao[0].target.classList.contains(this.observerClass)) {
            this.observarNumeros.disconnect();
            this.animacaoNumeros();
        }
    }
    adicionarObservadorDeMutacao() {
        this.observarNumeros = new MutationObserver(this.tratarMudancaNumeros);
        this.observarNumeros.observe(this.numerosClass, { attributes: true });
    }
    iniciar() {
        if (this.numeros.length && this.numerosClass) {
            this.adicionarObservadorDeMutacao();
        }
        return this;
    }
}
