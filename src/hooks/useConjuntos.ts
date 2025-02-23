/**
 * Hook con funciones para realizar operaciones con conjuntos.
 */
const useConjuntos = () => {
  /**
   * Verifica si A es subconjunto de B.
   * @template T
   * @param {T[]} A - Conjunto A.
   * @param {T[]} B - Conjunto B.
   * @returns {boolean} `true` si A es subconjunto de B, de lo contrario `false`.
   */
  const isSubset = <T>(A: T[], B: T[]): boolean => {
    const setB = new Set(B);
    return A.every((el) => setB.has(el));
  };

  /**
   * Verifica si un elemento pertenece a un conjunto.
   * @template T
   * @param {T} element - Elemento a verificar.
   * @param {T[]} set - Conjunto donde buscar el elemento.
   * @returns {boolean} `true` si el elemento pertenece al conjunto, `false` en caso contrario.
   */
  const isMember = <T>(element: T, set: T[]): boolean =>
    new Set(set).has(element);

  /**
   * Calcula la unión de dos conjuntos.
   * @template T
   * @param {T[]} A - Conjunto A.
   * @param {T[]} B - Conjunto B.
   * @returns {T[]} Un nuevo conjunto que contiene la unión de A y B.
   */
  const union = <T>(A: T[], B: T[]): T[] => [...new Set([...A, ...B])];

  /**
   * Calcula la intersección entre dos conjuntos.
   * @template T
   * @param {T[]} A - Conjunto A.
   * @param {T[]} B - Conjunto B.
   * @returns {T[]} Un conjunto con los elementos en común entre A y B.
   */
  const intersection = <T>(A: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return A.filter((el) => setB.has(el));
  };

  /**
   * Calcula la diferencia A - B.
   * @template T
   * @param {T[]} A - Conjunto A.
   * @param {T[]} B - Conjunto B.
   * @returns {T[]} Un conjunto con los elementos que están en A pero no en B.
   */
  const difference = <T>(A: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return A.filter((el) => !setB.has(el));
  };

  /**
   * Calcula la diferencia simétrica entre dos conjuntos.
   * @template T
   * @param {T[]} A - Conjunto A.
   * @param {T[]} B - Conjunto B.
   * @returns {T[]} Un conjunto con los elementos exclusivos de A y B.
   */
  const symmetricDifference = <T>(A: T[], B: T[]): T[] => [
    ...difference(A, B),
    ...difference(B, A),
  ];

  /**
   * Calcula el complemento de un conjunto dentro de un conjunto universal.
   * @template T
   * @param {T[]} U - Conjunto universal.
   * @param {T[]} B - Conjunto B.
   * @returns {T[]} Un conjunto con los elementos de U que no están en B.
   */
  const complement = <T>(U: T[], B: T[]): T[] => {
    const setB = new Set(B);
    return U.filter((el) => !setB.has(el));
  };

  return {
    isSubset,
    isMember,
    union,
    intersection,
    difference,
    symmetricDifference,
    complement,
  };
};

export default useConjuntos;
