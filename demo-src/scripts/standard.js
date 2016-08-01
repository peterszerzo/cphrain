function generateDrop(isTop) {
  const z = Math.random() * 2 - 1;
  return {
    x: Math.random(),
    y: isTop ? -.1 : Math.random(),
    scale: z > 0 ? (1 + z) : (1 + z / 2),
    blur: Math.floor(6 * z),
    v: 0.008 + 0.004 * z
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
    y: drop.y + drop.v,
    v: drop.v
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

export default () => {
  cphRain(generateInitialDrops(30), stepDrops, document.getElementById('app'));
}
