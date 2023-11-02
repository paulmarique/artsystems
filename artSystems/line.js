/**
 * Function to generate a single line constrained within the grid.
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} GRID_SIZE 
 * @param {HTMLCanvasElement} canvas 
 * @param {Array<string>} colorPalette 
 */

export function artSystemLine(ctx, GRID_SIZE, canvas, colorPalette) {
  // Constants for line length
  const MIN_LENGTH = 3; // Min length of the line (in grid cells)
  const MAX_LENGTH = 8; // Max length of the line (in grid cells)

  const x = Math.floor(Math.random() * 12) * GRID_SIZE;
  const y = Math.floor(Math.random() * 8) * GRID_SIZE;

  const length = Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1)) + MIN_LENGTH;

  // Retrieve a random color from the color palette
  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  ctx.fillStyle = color;

  // Decide orientation of the line - horizontal or vertical
  const isHorizontal = Math.random() >= 0.5;

  if (isHorizontal) {
    ctx.fillRect(x, y, length * GRID_SIZE, GRID_SIZE);
  } else {
    ctx.fillRect(x, y, GRID_SIZE, length * GRID_SIZE);
  }
}
