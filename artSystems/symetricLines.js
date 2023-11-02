// symetricLines.js
export function artSystemSymetricLines(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
  /* Purpose: This function generates a stack of lines on the canvas.
   * 
   * How: It first determines randomly how many lines to include in the stack (between 3 and 5). 
   * For each line, it randomly selects a color from the COLOR_PALETTE and draws a line with that color.
   */

  // Randomly determine the number of lines in the stack (between 3 and 5)
  const numberOfLines = Math.floor(Math.random() * 3) + 3;

  // Define starting y-coordinate for the stack, constrained to the grid
  let startY = Math.floor(Math.random() * ((canvas.height / GRID_SIZE) - 2)) * GRID_SIZE + GRID_SIZE;

  // Define the width of the stack, between 3 and 5 cells
  const stackWidth = Math.floor(Math.random() * 3) + 3;

  // Draw each line in the stack
  for (let i = 0; i < numberOfLines; i++) {
    // Randomly select a color from the palette
    const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

    // Set the line properties
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    // Draw the line within the defined width
    ctx.beginPath();
    ctx.moveTo(GRID_SIZE * stackWidth, startY);
    ctx.lineTo(canvas.width - GRID_SIZE * stackWidth, startY);
    ctx.stroke();

    // Update startY for the next line in the stack, constrained to the grid
    startY += GRID_SIZE;
  }
}
