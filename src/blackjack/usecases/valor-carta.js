/**
 * Esta funcion sirve para sacar el puntaje de la carta
 * @param {String} carta Ejemplo: 9H, 5H, 7C
 * @returns {Number} retorna un valor numerico
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };
