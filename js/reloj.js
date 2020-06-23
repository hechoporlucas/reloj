function obtenerHora(){
    let fecha = new Date();

    //declarar variables
    let nombreDiaSemana = document.getElementById('diaSemana'),
     numeroDia = document.getElementById('dia'),
     numeroAnio = document.getElementById('anio'),
     nombreMes = document.getElementById('mes'),
     numeroHoras = document.getElementById('horas'),
     numeroMinutos = document.getElementById('minutos'),
     numeroSegundos = document.getElementById('segundos'),
     ampm = document.getElementById('ampm');

    let dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
    ];

    let meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    nombreDiaSemana.innerText = dias[fecha.getDay()];
    numeroDia.innerText = fecha.getDate();
    nombreMes.innerText = meses[fecha.getMonth()];
    numeroAnio.innerText = fecha.getFullYear();



    if(fecha.getSeconds() < 10){
        numeroSegundos.innerText = "0" + fecha.getSeconds();
    }else{
        numeroSegundos.innerText = fecha.getSeconds();
    };

    if(fecha.getMinutes() < 10){
        numeroMinutos.innerText = "0" + fecha.getMinutes();
    }else{
        numeroMinutos.innerText = fecha.getMinutes();
    };

    if(fecha.getHours() < 10){
        numeroHoras.innerText = "0" + fecha.getHours();
    }else if(fecha.getHours() > 13){
        numeroHoras.innerText = "0" + (fecha.getHours() - 12);
    }else{
        numeroHoras.innerText = fecha.getHours();
    }

    let ampmTest = fecha.getHours() + fecha.getMinutes() + fecha.getSeconds();
    if(ampmTest < 12){
        ampm.innerText = "AM";
    }else if(ampmTest > 12){
        ampm.innerText = "PM";
    }else{
        ampm.innerText = "";
    };

};

window.setInterval(obtenerHora,1000);