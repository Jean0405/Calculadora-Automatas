/**
 * Hook con funciones para realizar operaciones con cadenas de texto.
 */
const useCadenas = () => {
  /**
   * Obtiene la longitud de una cadena.
   * @param {string} str - Cadena de entrada.
   * @returns {number} Longitud de la cadena.
   */
  const length = (str: string): number => str.length;

  /**
   * Concatena dos cadenas.
   * @param {string} A - Primera cadena.
   * @param {string} B - Segunda cadena.
   * @returns {string} Cadena resultante de la concatenación.
   */
  const concatenate = (A: string, B: string): string => `${A}${B}`;

  /**
   * Repite una cadena un número específico de veces.
   * @param {string} str - Cadena de entrada.
   * @param {number} n - Número de repeticiones (debe ser ≥ 0).
   * @returns {string} Cadena repetida `n` veces, o una cadena vacía si `n` es menor que 0.
   */
  const power = (str: string, n: number): string =>
    n > 0 ? str.repeat(n) : "";

  /**
   * Invierte una cadena.
   * @param {string} str - Cadena de entrada.
   * @returns {string} Cadena invertida.
   */
  const reverse = (str: string): string => [...str].reverse().join("");

  /**
   * Aplica la clausura de Kleene (indica repetición infinita de la cadena).
   * @param {string} str - Cadena de entrada.
   * @returns {string} Representación de la clausura de Kleene.
   */
  const kleeneClosure = (str: string): string =>
    `${str}* (infinite repetitions)`;

  /**
   * Aplica la clausura positiva (indica al menos una repetición de la cadena).
   * @param {string} str - Cadena de entrada.
   * @returns {string} Representación de la clausura positiva.
   */
  const positiveClosure = (str: string): string =>
    `${str}+ (at least one repetition)`;

  return {
    length,
    concatenate,
    power,
    reverse,
    kleeneClosure,
    positiveClosure,
  };
};

export default useCadenas;
