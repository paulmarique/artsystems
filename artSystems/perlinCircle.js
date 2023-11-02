// perlinCircle.js
export function artSystemPerlinCircle(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
  const gridSizeX = 40; // Width of each grid cell
  const gridSizeY = 40; // Height of each grid cell

  // Random radius between 40x40 (1 cell) and 160x160 (4 cells)
  const minRadius = gridSizeX;
  const maxRadius = gridSizeX * 4;
  const radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;

  // Random position within the grid
  const centerX = Math.floor(Math.random() * ((canvas.width / gridSizeX) - 2)) * gridSizeX + gridSizeX;
  const centerY = Math.floor(Math.random() * ((canvas.height / gridSizeY) - 2)) * gridSizeY + gridSizeY;

  // Random rotation angle in radians
  const rotationAngle = Math.random() * Math.PI * 2;

  // Random color from the palette
  const randomColor = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];

  // Draw the circle
  ctx.save(); // Save the current context state
  ctx.translate(centerX, centerY); // Translate to the circle's center
  ctx.rotate(rotationAngle); // Rotate the canvas
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.closePath();

  // Create an off-screen canvas to draw the noise pattern
  const noiseCanvas = document.createElement('canvas');
  noiseCanvas.width = radius * 2;
  noiseCanvas.height = radius * 2;
  const noiseCtx = noiseCanvas.getContext('2d');

  // Generate noise pattern
  for (let x = 0; x < noiseCanvas.width; x++) {
    for (let y = 0; y < noiseCanvas.height; y++) {
      // Calculate noise value using the unique noise frequency
      const noiseValue = basicNoise(x, y);
      const alpha = Math.max(0, Math.min(1, noiseValue)); // Ensure alpha is between 0 and 1

      // Only draw within the circle
      if ((x - radius) * (x - radius) + (y - radius) * (y - radius) <= radius * radius) {
        noiseCtx.fillRect(x, y, 1, 1);
      }
    }
  }

  // Draw the noise pattern onto the main canvas within the circle
  ctx.clip(); // Clip to the circle shape
  ctx.drawImage(noiseCanvas, -radius, -radius); // Draw the noise pattern centered
  ctx.restore(); // Restore the context state
}

// Modified basicNoise function to accept noise frequency as an argument
function basicNoise(x, y) {
  const frequency = Math.random() * (0.5 - 0.01) + 0.01; // Random frequency between 0.01 and 0.5
  let n = Math.sin((x * y + x + y) * frequency);
  return (n + 1) / 2; // Normalize to 0-1
}
