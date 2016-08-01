function generateDrop(isTop) {
  const random = Math.random();
  return {
    x: Math.random(),
    y: isTop ? -.1 : Math.random(),
    scale: 1,
    blur: 0
  };
}

function generateInitialDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push(generateDrop(false));
  }
  return drops;
}

function stepDrop(drop) {
  if (drop.y > 1.1) {
    return generateDrop(true);
  }
  return {
    scale: drop.scale,
    blur: drop.blur,
    x: drop.x,
    y: drop.y + .003
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

export default () => {
  cphRain(generateInitialDrops(30), stepDrops, document.getElementById('app'));
}
