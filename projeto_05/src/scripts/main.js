AOS.init({});

const dataEvent = new Date('2026-12-12 19:00:00');
const timesTempEvent = dataEvent.getTime();

const contaHoras = setInterval(() => {
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const diferenca = timesTempEvent - timesTempAtual;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}min ${segundos}s`;

    if (diferenca <= 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado`;
    }
}, 1000);
