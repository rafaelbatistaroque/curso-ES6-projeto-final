import { bitcoinAPI } from "../settings/api.js";

export default function mostraPrecoBitcoin() {
    try {
        carregarDadosBitcoin(bitcoinAPI);
    } catch (error) {
        console.log(error);
    }
    async function carregarDadosBitcoin(urlAPI) {
        const dadosBitcoin = await (await fetch(urlAPI)).json();
        atualizarPrecoBitcoinNaPagina(dadosBitcoin);
    }
    function atualizarPrecoBitcoinNaPagina(dadosBitcoin) {
        const precoBitcoin = document.querySelector('.btc-preco');
        precoBitcoin.textContent = `${(100 / dadosBitcoin.BRL.sell).toFixed(4)} BTC`;
    }
}