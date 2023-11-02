export function artSystemGradientSquare(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
  const squareSize = Math.floor(Math.random() * 4) + 2;
  let startX = Math.floor(Math.random() * (canvas.width / GRID_SIZE - squareSize)) * GRID_SIZE;
  let startY = Math.floor(Math.random() * (canvas.height / GRID_SIZE - squareSize)) * GRID_SIZE;
  
  const colorStart = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
  const colorEnd = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
  
  // Create gradient
  const gradient = ctx.createLinearGradient(startX, startY, startX + squareSize * GRID_SIZE, startY + squareSize * GRID_SIZE);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  
  // Draw the gradient square
  ctx.fillStyle = gradient;
  ctx.fillRect(startX, startY, squareSize * GRID_SIZE, squareSize * GRID_SIZE);
}