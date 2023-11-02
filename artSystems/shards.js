// shards.js
/**
 * Function to generate a stack of parallel horizontal or vertical lines within a grid.
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} GRID_SIZE 
 * @param {HTMLCanvasElement} canvas 
 * @param {Array<string>} colorPalette 
 */
export function artSystemShards(ctx, GRID_SIZE, canvas, colorPalette) {
  // Constants for the stack
  const LINE_WIDTH = 1; // Width of each line in the stack
  const MIN_LINES = 10; // Minimum number of lines in the stack
  const MAX_LINES = 10; // Maximum number of lines in the stack
  const MIN_WIDTH_CELLS = 2; // Minimum width of the stack in grid cells
  const MAX_WIDTH_CELLS = 6; // Maximum width of the stack in grid cells
  
  // Remove white from the color palette if present
  const adjustedColorPalette = colorPalette.filter(color => color !== '#ffffff');

  // Decide the orientation: 'horizontal' or 'vertical'
  const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';

  // Calculate the number of lines and the width of the stack
  const numberOfLines = Math.floor(Math.random() * (MAX_LINES - MIN_LINES + 1)) + MIN_LINES;
  const stackWidthCells = Math.floor(Math.random() * (MAX_WIDTH_CELLS - MIN_WIDTH_CELLS + 1)) + MIN_WIDTH_CELLS;

  // Evenly distribute the lines within the cell height or width based on orientation
  const spacing = (GRID_SIZE - LINE_WIDTH) / (numberOfLines - 1);

  // Choose a random starting point for the stack within the grid
  const xStart = Math.floor(Math.random() * (canvas.width / GRID_SIZE - stackWidthCells + 1)) * GRID_SIZE;
  const yStart = Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE;

  // Set the line properties
  ctx.lineWidth = LINE_WIDTH;

  // Choose a single color for this stack
  const stackColor = adjustedColorPalette[Math.floor(Math.random() * adjustedColorPalette.length)];

  // Draw each line in the stack
  for (let i = 0; i < numberOfLines; i++) {
    ctx.strokeStyle = stackColor;
    const offset = i * spacing;

    ctx.beginPath();
    if (orientation === 'horizontal') {
      ctx.moveTo(xStart, yStart + offset);
      ctx.lineTo(xStart + (GRID_SIZE * stackWidthCells), yStart + offset);
    } else {  // vertical
      ctx.moveTo(xStart + offset, yStart);
      ctx.lineTo(xStart + offset, yStart + (GRID_SIZE * stackWidthCells));
    }
    ctx.stroke();
  }
}
