const days = document.getElementById("dias"),
      hours = document.getElementById("hrs"),
      minutes= document.getElementById("min"),
      seconds = document.getElementById("seg");


const fiesta = new Date("October 29, 2024 00:00:00").getTime();

setInterval(() => {
    let hoy = new Date().getTime()

    let tiempoRest = fiesta - hoy;
    
    //converción de ms a días , horas , min, sec
    
    let dias = Math.floor (tiempoRest/86400000),
        hrs = Math.floor (tiempoRest/3600000) % 24,
        min = Math.floor (tiempoRest/60000) % 60,
        seg = Math.floor(tiempoRest/1000) % 60;
    
        days.innerHTML = dias,
        hours.innerHTML = hrs,
        minutes.innerHTML = min,
        seconds.innerHTML = seg;

        if (hrs < 10) hours.innerHTML = "0" + hrs;
        if(min < 10) minutes.innerHTML = "0" + min;
        if (seg < 10) seconds.innerHTML = "0" + seg;

}, 1000);




      