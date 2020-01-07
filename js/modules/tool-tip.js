export default class ToolTip {
    constructor(toolTips) {
        this.toolTips = document.querySelectorAll(toolTips);

        this.removerToolTip = this.removerToolTip.bind(this);
        this.posicionarToolTipBox = this.posicionarToolTipBox.bind(this);
        this.ativarToolTipAoPosicionarMouseSobre = this.ativarToolTipAoPosicionarMouseSobre.bind(this);
    }

    criarToolTipBox(element) {
        const toolTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        toolTipBox.classList.add('tooltip');
        toolTipBox.textContent = text;
        document.body.appendChild(toolTipBox);
        this.toolTipBox = toolTipBox;
    }
    ativarToolTipAoPosicionarMouseSobre(event) {
        this.criarToolTipBox(event.currentTarget);

        event.currentTarget.addEventListener('mousemove', this.posicionarToolTipBox);
        event.currentTarget.addEventListener('mouseleave', this.removerToolTip);
    }
    removerToolTip(event) {
        this.toolTipBox.remove();
        event.currentTarget.removeEventListener('mouseleave', this.removerToolTip);
        event.currentTarget.removeEventListener('mousemove', this.posicionarToolTipBox);
    }
    adicionarEventoToolTip() {
        this.toolTips.forEach(tooltip =>
            tooltip.addEventListener('mouseover', this.ativarToolTipAoPosicionarMouseSobre));
    }
    posicionarToolTipBox(event) {
        this.toolTipBox.style.top = `${event.pageY + 20}px`;
        if (event.pageX + 220 > window.innerWidth)
            this.toolTipBox.style.left = `${event.pageX - 200}px`;
        else
            this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
    iniciar() {
        if (this.toolTips.length)
            this.adicionarEventoToolTip();
        return this;
    }
}