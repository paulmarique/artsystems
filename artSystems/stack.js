// stack.js
export function artSystemStack(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
 /* Purpose: This function generates a stack of lines on the canvas within the constraints of the grid.
  * 
  * How: It first determines randomly how many lines to include in the stack (between 3 and 5). 
  * For each line, it randomly selects a color from the COLOR_PALETTE and draws a line within a grid cell.
  */

 // Randomly determine the number of lines in the stack (between 3 and 5)
 const numberOfLines = Math.floor(Math.random() * 3) + 3;

 // Define starting x and y-coordinate for the stack
 let startX = Math.floor(Math.random() * (canvas.width / GRID_SIZE - 1)) * GRID_SIZE;
 let startY = Math.floor(Math.random() * (canvas.height / GRID_SIZE - numberOfLines)) * GRID_SIZE;

 // Draw each line in the stack
 for (let i = 0; i < numberOfLines; i++) {
   // Randomly select a color from the palette
   const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

   // Set the line properties
   ctx.strokeStyle = color;
   ctx.lineWidth = GRID_SIZE;

   // Draw the line
   ctx.beginPath();
   ctx.moveTo(startX, startY);
   ctx.lineTo(startX + GRID_SIZE, startY);
   ctx.stroke();

   // Update startY for the next line in the stack
   startY += GRID_SIZE;
 }
}
