// dottedSquare.js
export function artSystemDottedSquare(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
  /* Purpose: This function generates a square with a 1px dotted texture on the canvas within the constraints of the grid.
   * 
   * How: It first determines randomly the size of the square (between 2 and 5 grid cells). 
   * It then picks a random color from the COLOR_PALETTE and draws the square with that background color.
   * Finally, it fills the square with 1px dotted texture.
   */

  // Randomly determine the size of the square (between 2 and 5 grid cells)
  const squareSize = Math.floor(Math.random() * 4) + 2;

  // Define starting x and y-coordinate for the square
  let startX = Math.floor(Math.random() * (canvas.width / GRID_SIZE - squareSize)) * GRID_SIZE;
  let startY = Math.floor(Math.random() * (canvas.height / GRID_SIZE - squareSize)) * GRID_SIZE;

  // Randomly select a background color from the palette
  const bgColor = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

  // Draw the square with the background color
  ctx.fillStyle = bgColor;
  ctx.fillRect(startX, startY, squareSize * GRID_SIZE, squareSize * GRID_SIZE);

  // Draw 1px dotted texture inside the square
  for (let x = startX; x < startX + squareSize * GRID_SIZE; x += 2) {
    for (let y = startY; y < startY + squareSize * GRID_SIZE; y += 2) {
      ctx.fillStyle = 'black';
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
