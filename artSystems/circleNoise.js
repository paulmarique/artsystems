/**
 * Function to generate a circle filled with noise texture, fitting within a grid system.
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} GRID_SIZE - Size of each grid cell, assumed to be 40
 * @param {HTMLCanvasElement} canvas 
 * @param {Array<string>} colorPalette 
 */
export function artSystemNoiseCircle(ctx, GRID_SIZE, canvas, colorPalette) {
  // Define circle width constraints based on grid
  const minCircleRadius = 1.5 * GRID_SIZE;
  const maxCircleRadius = 1.5 * GRID_SIZE;
  const circleRadius = minCircleRadius + (Math.floor(Math.random() * (maxCircleRadius - minCircleRadius + 1)));

  // Select random colors from the palette for background and noise
  const [bgColor, noiseColor] = getRandomColorsFromPalette(colorPalette);

  // Randomly place the circle on the grid
  const maxGridsX = Math.floor(canvas.width / GRID_SIZE);
  const maxGridsY = Math.floor(canvas.height / GRID_SIZE);
  const circleCenterGridX = Math.floor(Math.random() * (maxGridsX - (circleRadius / GRID_SIZE) + 1));
  const circleCenterGridY = Math.floor(Math.random() * (maxGridsY - (circleRadius / GRID_SIZE) + 1));
  const circleCenterX = (circleCenterGridX * GRID_SIZE) + GRID_SIZE / 2;
  const circleCenterY = (circleCenterGridY * GRID_SIZE) + GRID_SIZE / 2;

  // Draw the circle with background color
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.arc(circleCenterX, circleCenterY, circleRadius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  // Iterate over the canvas pixels
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const distanceToCenter = Math.sqrt(Math.pow(x - circleCenterX, 2) + Math.pow(y - circleCenterY, 2));

      // Check if the pixel is within the circle
      if (distanceToCenter <= circleRadius) {
        // Use a simple noise function (based on randomness for this example)
        const NOISE_DENSITY = 0.1;
        if (Math.random() < NOISE_DENSITY) {
          ctx.fillStyle = noiseColor;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }
}

/**
 * Helper function to randomly select two distinct colors from a given palette.
 * @param {Array<string>} palette 
 * @returns {Array<string>} [color1, color2]
 */
function getRandomColorsFromPalette(palette) {
  const shuffledPalette = [...palette].sort(() => 0.5 - Math.random());
  return [shuffledPalette[0], shuffledPalette[1]];
}
