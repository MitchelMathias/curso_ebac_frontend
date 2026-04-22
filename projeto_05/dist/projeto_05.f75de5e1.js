AOS.init({});
const dataEvent = new Date('2026-12-12 19:00:00');
const timesTempEvent = dataEvent.getTime();
const contaHoras = setInterval(()=>{
    const agora = new Date();
    const timesTempAtual = agora.getTime();
    const diferenca = timesTempEvent - timesTempAtual;
    const dias = Math.floor(diferenca / 86400000);
    const horas = Math.floor(diferenca % 86400000 / 3600000);
    const minutos = Math.floor(diferenca % 3600000 / 60000);
    const segundos = Math.floor(diferenca % 60000 / 1000);
    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}min ${segundos}s`;
    if (diferenca <= 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento Expirado`;
    }
}, 1000);

//# sourceMappingURL=projeto_05.f75de5e1.js.map
