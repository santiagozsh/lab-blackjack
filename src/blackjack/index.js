import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from './usecases';

const miModulo = (() => {
  "use strict";

  let deck = [],
    puntosJugadores = [];

  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  // Referencias HTML
  const btnPedirCarta = document.querySelector("#btnPedirCarta"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevoJuego = document.querySelector("#btnNuevoJuego");

  const puntosHTML = document.querySelectorAll("small");

  const divCartasJugadores = document.querySelectorAll(".divCartas");

  // Esta funcion inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck( tipos, especiales );

    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach( elem => elem.innerText = 0);

    divCartasJugadores.forEach( elem => elem.innerHTML = '');

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
  };

  inicializarJuego();

  

  // Eventos

  btnPedirCarta.addEventListener("click", () => {
    const carta = pedirCarta( deck );
    
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

    crearCarta(carta, 0, divCartasJugadores);

    if (puntosJugador > 21) {
      console.warn("Perdiste!");
      btnPedirCarta.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    } else if (puntosJugador === 21) {
      console.warn("21, Ganaste!");
      alert("Ganaste!");
      btnPedirCarta.disabled = true;
      btnDetener.disabled = true;
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    const [ puntosMinimos ] = puntosJugadores;

    turnoComputadora(puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores);
  });

  btnNuevoJuego.addEventListener("click", () => {

    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego
  };
})();
