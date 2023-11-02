import { artSystemLine } from './artSystems/line.js';
import { artSystemStack } from './artSystems/stack.js';
import { artSystemDottedSquare } from './artSystems/dottedSquare.js';
import { artSystemGradientSquare } from './artSystems/gradientSquare.js';
import { artSystemCirclePattern } from './artSystems/circlePattern.js';

// CONSTANTS
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");
const GRID_SIZE = 40; // This is determined by the canvas height divided by the grid cells count.
const COLOR_PALETTE = ["blue", "yellow", "black", "white"];
const GRID_VISIBILITY = 0.15;


function drawGrid() {
/* Purpose: This function renders a grid on the canvas.
 * 
 * How: It uses two nested loops to draw rectangles (grid cells) across the canvas. The outer loop manages the x-axis (columns) and 
 * the inner loop manages the y-axis (rows). It uses the GRID_SIZE to determine the dimensions of each grid cell and GRID_VISIBILITY 
 * for the opacity of grid lines.
 */
  for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
    for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
      ctx.strokeStyle = `rgba(0, 0, 0, ${GRID_VISIBILITY})`;
      ctx.lineWidth = 1;  // Line width set to 1 pixel
      ctx.setLineDash([1, 5]);  // Creates a pattern of a 5-pixel line followed by a 3-pixel space

      ctx.strokeRect(x, y, GRID_SIZE, GRID_SIZE);
    }
  }
}

function generateArtwork() {
  /* Purpose: This is the main function responsible for creating the artwork on the canvas.
  * 
  * How: The function first defines an array of available art systems. Then, it determines randomly how many of these systems 
  * to apply in this instance (a number between 3 and 6). The canvas is cleared to ensure a fresh start. Then, for the determined 
  * number of art systems, it selects one randomly and executes it. After applying all the art systems, it overlays the grid on top.
  */
    const artSystems = [artSystemLine, artSystemStack, artSystemDottedSquare, artSystemGradientSquare, artSystemCirclePattern];
    const artSystemsCount = Math.floor(Math.random() * 4) + 3;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (let i = 0; i < artSystemsCount; i++) {
      const randomSystem = artSystems[Math.floor(Math.random() * artSystems.length)];
      randomSystem(ctx, GRID_SIZE, canvas, COLOR_PALETTE);
    }
  
    drawGrid();
  }

// Execution of the main function to generate the artwork upon loading the script.
generateArtwork();
setInterval(generateArtwork, 1000);