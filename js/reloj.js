//Variable autoinvocada para proteger nuestro código JavaScript
(function(){

    var actualizarHora = function(){

        //Estas variables traen informción del sistema
        var fecha = new Date;
        var hora = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var diaSemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();
        
        //Estas variables traen los elementos HTML mediantes IDs
        var pHoras = document.getElementById("hora");
        var pAMPM = document.getElementById("ampm");
        var pMinutos = document.getElementById("minutos");
        var pSegundos = document.getElementById("segundos");
        var pDiaSemana = document.getElementById("diaSemana");
        var pDia = document.getElementById("dia")
        var pMes = document.getElementById("mes");
        var pYear = document.getElementById("year");

        //Arreglo que contiene los nombre de los días de la semana
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',
        'Sábado']

        //Arreglo que contiene los meses del año
        var mesName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        //Mostramos la información en el documento HTML
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = mesName[mes];
        pYear.textContent = year;
        
        if (hora >= 12) {
            hora = hora - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        if (hora == 0){
            hora = 12;
        }

        pHoras.textContent = hora;

        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        
        //Timers
        setInterval(actualizarHora, 1);


    }
    
    //Aquí ejecutamos la función "actulizarHora"
    actualizarHora();

}())