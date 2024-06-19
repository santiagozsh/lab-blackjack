import { pedirCarta } from "./pedir-carta";
import { determinarGanador } from "./determinar-ganador";
import { crearCarta } from "./crear-carta";
import { acumularPuntos } from "./acumular-puntos";

export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores ) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta( deck ),
        turno = puntosJugadores.length - 1;

      puntosComputadora = acumularPuntos(carta, turno, puntosJugadores, puntosHTML);

      crearCarta(carta, turno, divCartasJugadores);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador( puntosJugadores );

  };