export default class Expediente {
    constructor(semana) {
        this.expediente = document.querySelector(semana);
    }
    carregarDadosExpediente() {
        this.diasExpediente = this.expediente.dataset.semana.split(',').map(Number);
        this.horasExpediente = this.expediente.dataset.horario.split(',').map(Number);
    }
    carregarDadosAtuais() {
        this.dataAtual = new Date();
        this.diaAtual = this.dataAtual.getDay();
        this.horaAtual = this.dataAtual.getUTCHours() - 4;
    }
    retornarTrueSeAberto() {
        const diaAberto = this.diasExpediente.indexOf(this.diaAtual) !== -1;
        const horaAberto = this.horaAtual >= this.horasExpediente[0] && this.horaAtual < this.horasExpediente[1];
        return diaAberto && horaAberto;
    }
    ativarSinalVerdeSeAberto() {
        if (this.retornarTrueSeAberto())
            this.expediente.classList.remove('fechado');
        else this.expediente.classList.add('fechado');
    }
    iniciar() {
        if (this.expediente) {
            this.carregarDadosExpediente();
            this.carregarDadosAtuais();
            this.ativarSinalVerdeSeAberto();
        }
        return this;
    }
}
