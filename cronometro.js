"use strict"

var hora = 0;
var minuto = 0;
var segundos = 0;

var tempo = 1000;
var cron; 

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    hora = 0;
    minuto = 0;
    segundos = 0;
    document.getElementById('cronometro').innerText = '00:00:00';
}

function timer() {
    segundos++;

    if (segundos == 60) {
        segundos = 0;
        minuto++
        if (minuto == 60) {
            minuto = 0;
            hora++
        } 
    }

    var formato = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    document.getElementById('cronometro').innerText = formato;

    return formato;
}