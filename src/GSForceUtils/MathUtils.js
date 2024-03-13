/**
 * MathUtils provides functionality to handle calculations.
 * 
 * @version 0.0.1
 * @lastUpdate 18.11.2023
 */
class MathUtils {

  static generateRandom(max) {
    // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    // Convert the random decimal to a random integer between 1 and 100
    return Math.floor(randomDecimal * max);
  }
}