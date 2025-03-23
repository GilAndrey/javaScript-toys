function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

const relogio = document.querySelector(".relogio");

let seconds = 0;

let timer;

function startRelogio() {
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    seconds = 0;
  }

  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startRelogio();
  }

  if (el.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }
});
