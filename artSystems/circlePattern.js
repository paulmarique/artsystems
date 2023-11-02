export function artSystemCirclePattern(ctx, GRID_SIZE, canvas, COLOR_PALETTE) {
  const diameter = GRID_SIZE;
  let centerX = Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE + GRID_SIZE / 2;
  let centerY = Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE + GRID_SIZE / 2;

  const bgColor = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
  ctx.fillStyle = bgColor;

  // Draw the background circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, diameter / 2, 0, Math.PI * 2);
  ctx.fill();

/*  // Draw the dotted pattern
  ctx.fillStyle = 'black';
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
    const x = centerX + (diameter / 4) * Math.cos(angle);
    const y = centerY + (diameter / 4) * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill(); 
    
  }*/
}
