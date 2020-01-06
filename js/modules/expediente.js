export default function mostrarExpediente() {
    const expediente = document.querySelector('[data-semana]');
    const diasExpediente = expediente.dataset.semana.split(',').map(Number);
    const horasExpediente = expediente.dataset.horario.split(',').map(Number);

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    const horaAtual = dataAtual.getHours();

    const diaAberto = diasExpediente.indexOf(diaAtual) !== -1;
    const horaAberto = horaAtual >= horasExpediente[0] && horaAtual < horasExpediente[1];

    diaAberto && horaAberto ?
        expediente.classList.remove('fechado') :
        expediente.classList.add('fechado');
}
