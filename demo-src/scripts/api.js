function generateDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push({
      x: Math.random(),
      y: Math.random(),
      scale: 1,
      blur: 0
    });
  }
  return drops;
}

function stepDrop({x, y, scale, blur}) {
  const isOver = y > 1.2;
  return {
    scale,
    blur,
    x: isOver ? Math.random() : x,
    y: isOver ? -.2 : y + .008
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

export default () => {
  console.log('Hi, Mom!');
  cphRain(generateDrops(30), stepDrops, document.getElementById('app'));
}
