export default function verificarCliqueLadoFora(elementoClicado, tiposInteracao, removerClasseAtivo) {
    const html = document.documentElement;
    const ladoFora = 'data-lado-fora';

    if (!elementoClicado.hasAttribute(ladoFora)) {
        tiposInteracao.forEach(interacao => {
            setTimeout(() => html.addEventListener(interacao, tratarCliqueLadoFora));
            elementoClicado.setAttribute(ladoFora, '');
        });
    }
    function tratarCliqueLadoFora(event) {
        if (!elementoClicado.contains(event.target)) {
            elementoClicado.removeAttribute(ladoFora);
            tiposInteracao.forEach(interacao => {
                html.removeEventListener(interacao, tratarCliqueLadoFora);
            });
            removerClasseAtivo();
        }
    }
}