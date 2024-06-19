export const determinarGanador = ( puntosJugadores ) => {

    const [ puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosMinimos > 21 || puntosComputadora === 21) {
        alert("Computadora gana!");
      } else if (puntosMinimos === 21 || puntosComputadora > 21) {
        alert("Jugador gana!");
      } else if (puntosComputadora < 21) {
        alert("Empate!, nadie gana");
      } else if (puntosMinimos === puntosComputadora) {
        alert("Empate!, nadie gana");
      }
    }, 10);
  };