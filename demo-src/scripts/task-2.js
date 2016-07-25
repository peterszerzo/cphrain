function generateDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push(generateDrop());
  }
  return drops;
}

function generateDrop() {
  return {
    x: Math.random(),
    y: Math.random(),
    scale: 1,
    blur: 0
  };
}

function stepDrop(drop) {
  const isOver = drop.y > 1.1;
  return {
    scale: drop.scale,
    blur: drop.blur,
    x: isOver ? Math.random() : drop.x,
    y: isOver ? -.1 : drop.y + .008
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

console.log('Hi, Mom!');
cphRain(generateDrops(30), stepDrops, document.getElementById('app'));
