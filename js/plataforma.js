//creamos una funcion del reloj

function clock() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
// agregamos un condicional para saber si es am o pm
  if (hrs === 0) hrs = 12;
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${hrs}:${mins}:${secs} ${period}`;
  setInterval(clock, 1000);
  document.getElementById("clock").innerText = time; // funciona para obtener el reloj dentro del html
}
clock();

const currentTime = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";

  if (hrs === 0) hrs = 12;
  if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${hrs}:${mins}:${secs} ${period}`;
  return time;
};

//creamos un nuevo tiempo para que este sea usado el suma 
const newTime = [];

const clockIn = document.getElementById("clockIn"); 
//funcion para obterner el valor de clock in y clock out todo sera enviado al local storage
clockIn.onclick = () => {
  const t1 = new Date();
  localStorage.setItem("clockIn", currentTime());

  let valorClockIn = localStorage.getItem("clockIn", currentTime);
  document.getElementById("valorClockIn").innerHTML = valorClockIn;
  newTime.push(t1);
};

const clockOut = document.getElementById("clockOut");
clockOut.onclick = () => {
  const t2 = new Date();
  localStorage.setItem("clockOut", currentTime());

  let valorClockOut = localStorage.getItem("clockOut", currentTime);
  document.getElementById("valorClockOut").innerHTML = valorClockOut;
  newTime.push(t2);
};
//creamos una const y llamos el id suma para seguir con la arrow function y seguir con la variable para mandarlo al local storage
const buttonTotalTime = document.getElementById("suma");
buttonTotalTime.onclick = () => {
  localStorage.setItem("tiempoTotal", getTime());
  let tiempoTotal = localStorage.getItem("tiempoTotal", getTime);
  document.getElementById("tiempoTotal").innerHTML = tiempoTotal;
};
//tenemos en cuenta retirar el pm y am para realizar la suma
const getTime = () => {
  let t1 = newTime[0];
  let t2 = newTime[1];
  console.log(t1);
  let diff = t2.getTime() - t1.getTime();
  let msec = diff;

  let hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  let mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  let ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  return hh + ":" + mm + ":" + ss;
};
